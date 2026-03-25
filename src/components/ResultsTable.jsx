import { useState } from 'react'
import {
  INDIV_SOLID_TABLES, INDIV_CABLE_TABLES,
  TRAPEZE_SOLID_TABLES, TRAPEZE_CABLE_STD_TABLES, TRAPEZE_CABLE_X_TABLES,
  PIPE_WEIGHTS, OPM_PAGES, getRodSize, findTrapezeRow, selectFpTier,
  getCodeHangerSpacing,
} from '../data/braceData'
import { exportToPdf } from '../utils/exportPdf'

// ── Shared helper ─────────────────────────────────────────────────────────────
// Fetch a single OPM page from the server and open it in a new browser tab.
// Works identically in local dev (Vite plugin) and on Vercel (serverless fn).
async function openRefPage(pdfPageNum) {
  const resp = await fetch('/api/opm-pages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pages: [pdfPageNum] }),
  })
  if (!resp.ok) throw new Error(`Server error ${resp.status}`)
  const bytes = await resp.arrayBuffer()
  const url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }))
  window.open(url, '_blank')
  // Clean up the object URL after the tab has had time to load it
  setTimeout(() => URL.revokeObjectURL(url), 10_000)
}

// ── OpmLink ───────────────────────────────────────────────────────────────────
// Renders a clickable link that fetches and opens an OPM reference page on demand.
// Used for B-table refs in the schedule header (e.g. "B1.7").
function OpmLink({ pageRef, label }) {
  const [loading, setLoading] = useState(false)
  const entry = OPM_PAGES[pageRef]
  if (!entry) return <span className="detail-code">{label || pageRef}</span>

  async function handleClick(e) {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    try { await openRefPage(entry.pdf) }
    catch (err) { console.error('[OpmLink]', err) }
    finally { setLoading(false) }
  }

  return (
    <a
      href="#"
      onClick={handleClick}
      className="detail-link"
      title={`Reference Page ${entry.pdf}: ${entry.label}`}
    >
      {label || pageRef}
      <span className="link-icon">{loading ? '…' : '↗'}</span>
    </a>
  )
}

// ── DetailCode ────────────────────────────────────────────────────────────────
// Kit installation detail code cell (C1.xx, F1.xx, etc.).
// Clicking fetches and opens the corresponding detail drawing in a new tab.
function DetailCode({ code }) {
  const [loading, setLoading] = useState(false)
  if (!code || code === '—') return <span className="detail-na">—</span>
  const entry = OPM_PAGES[code]
  if (!entry) return <span className="detail-code">{code}</span>

  async function handleClick(e) {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    try { await openRefPage(entry.pdf) }
    catch (err) { console.error('[DetailCode]', err) }
    finally { setLoading(false) }
  }

  return (
    <a
      href="#"
      onClick={handleClick}
      className="detail-link kit-detail"
      title={`Ref. p.${entry.pdf}: ${entry.label}`}
    >
      {code}
      <span className="link-icon">{loading ? '…' : '↗'}</span>
    </a>
  )
}

// ── DesigCode ─────────────────────────────────────────────────────────────────
// Hanger or brace structure-attachment designation code (e.g. "38C", "63G").
// For brace codes the fallback page is chosen by structure type so the user
// lands directly on the relevant brace bracket attachment detail drawing.
const BRACE_STRUCTURE_PAGE = {
  concrete:     'N1.14',   // Cast-in-place Concrete → p.606
  concreteSlab: 'N2.11',   // Concrete over Metal Deck → p.640
  metalDeck:    'N7.10',   // Metal Decking (unfilled) → p.730
  steel:        'N3.11',   // Structural Steel → p.715
  wood:         'N0.00',   // Wood — use general N0.00 designation table
}

function DesigCode({ code, type = 'hanger', structure = 'concrete' }) {
  const [loading, setLoading] = useState(false)
  if (!code || code === '—') return <span className="detail-na">—</span>

  const entry = OPM_PAGES[code]
  let sectionKey, targetPage, titleText

  if (type === 'brace') {
    sectionKey = BRACE_STRUCTURE_PAGE[structure] ?? 'N0.00'
    const sectionEntry = OPM_PAGES[sectionKey]
    targetPage = entry?.pdf ?? sectionEntry?.pdf
    titleText  = entry
      ? `Ref. p.${entry.pdf}: ${entry.label}`
      : `Brace Bracket Detail (${sectionEntry?.label ?? 'N-section'}) — p.${sectionEntry?.pdf}`
  } else {
    sectionKey  = 'M1.10'  // First real hanger drawing, not just the notes table
    const sectionEntry = OPM_PAGES[sectionKey]
    targetPage = entry?.pdf ?? sectionEntry?.pdf
    titleText  = entry
      ? `Ref. p.${entry.pdf}: ${entry.label}`
      : `Hanger Attachment Details — p.${sectionEntry?.pdf}`
  }

  async function handleClick(e) {
    e.preventDefault()
    if (loading || !targetPage) return
    setLoading(true)
    try { await openRefPage(targetPage) }
    catch (err) { console.error('[DesigCode]', err) }
    finally { setLoading(false) }
  }

  return (
    <a
      href="#"
      onClick={handleClick}
      className={`detail-link desig-badge${type === 'brace' ? ' accent' : ''}`}
      title={titleText}
    >
      {code}
      <span className="link-icon">{loading ? '…' : '↗'}</span>
    </a>
  )
}

// ── RefCard ───────────────────────────────────────────────────────────────────
// Quick-reference card button that fetches and opens an OPM page on click.
function RefCard({ icon, title, sub, pageNum, className = '' }) {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    if (loading || !pageNum) return
    setLoading(true)
    try { await openRefPage(pageNum) }
    catch (err) { console.error('[RefCard]', err) }
    finally { setLoading(false) }
  }

  return (
    <button
      onClick={handleClick}
      className={`ref-link-card ${className}${loading ? ' loading' : ''}`}
      disabled={loading || !pageNum}
      title={pageNum ? `Open reference page ${pageNum}` : ''}
    >
      <div className="ref-icon">{loading ? '⏳' : icon}</div>
      <div>
        <div className="ref-title">{title}</div>
        <div className="ref-sub">{sub}</div>
      </div>
    </button>
  )
}

// ---- Label helpers ----
const MATERIAL_LABELS = {
  steel: 'Steel Pipe',
  castIron: 'Cast Iron Pipe',
  copperTypeK: 'Copper Type K',
  copperWithInsulation: 'Copper w/ Insulation',
  fireSprinkler_sch10: 'Fire Pipe Sch10',
  fireSprinkler_sch40: 'Fire Pipe Sch40',
  rmc: 'RMC Conduit',
  imc: 'IMC Conduit',
  emt: 'EMT Conduit',
  cableTray: 'Cable Tray',
  rectDuct: 'Rect. Duct',
  roundDuct: 'Round Duct',
}
const INSTALL_LABELS = { individual: 'Individually Hung', trapeze: 'Trapeze Supported' }
const BRACE_LABELS = { solid: 'Solid / Rigid', cableStd: 'Cable Standard', cableX: 'Cable X-Pattern' }
const STRUCTURE_LABELS = {
  concrete: 'Cast-in-Place Concrete',
  metalDeck: 'Metal Decking (Unfilled)',
  steel: 'Structural Steel',
  wood: 'Wood',
  concreteSlab: 'Concrete over Metal Deck',
}

export default function ResultsTable({ formData, onBack }) {
  const [exporting, setExporting] = useState(false)

  const {
    serviceType, material, pipeSize, installMethod, braceType,
    fp, spacingOption, hangerSpacing, totalWeight, structure
  } = formData

  const fpTier = selectFpTier(fp)
  const pipeWeight = PIPE_WEIGHTS[material]?.[pipeSize] ?? null
  const isTrapeze = installMethod === 'trapeze'
  const hangerInfo = getCodeHangerSpacing(material, pipeSize)

  // ---- Resolve the brace table ----
  let tableData = null
  let tableType = null
  let resolvedRows = []

  if (!isTrapeze) {
    // Individually hung
    if (braceType === 'solid') {
      tableData = INDIV_SOLID_TABLES[material]?.[fpTier]?.[spacingOption]
      tableType = 'indiv-solid'
    } else {
      tableData = INDIV_CABLE_TABLES[material]?.[fpTier]?.[spacingOption] ||
                  INDIV_CABLE_TABLES[material]?.[fpTier]?.[1]
      tableType = 'indiv-cable'
    }
    if (tableData) {
      // Filter to selected size if possible, else show full table
      resolvedRows = tableData.rows.filter(r => r.size === Number(pipeSize))
      if (resolvedRows.length === 0) resolvedRows = tableData.rows
    }
  } else {
    // Trapeze
    const tw = totalWeight || 50
    if (braceType === 'solid') {
      tableData = TRAPEZE_SOLID_TABLES[fpTier]?.[spacingOption] ||
                  TRAPEZE_SOLID_TABLES[fpTier]?.[1]
      tableType = 'trapeze-solid'
    } else if (braceType === 'cableStd') {
      tableData = TRAPEZE_CABLE_STD_TABLES[fpTier]?.[spacingOption] ||
                  TRAPEZE_CABLE_STD_TABLES[fpTier]?.[1]
      tableType = 'trapeze-cable-std'
    } else {
      tableData = TRAPEZE_CABLE_X_TABLES[fpTier]?.[spacingOption] ||
                  TRAPEZE_CABLE_X_TABLES[fpTier]?.[1]
      tableType = 'trapeze-cable-x'
    }
    if (tableData) {
      const matchRow = findTrapezeRow(tableData.rows, tw)
      resolvedRows = matchRow ? [matchRow] : tableData.rows
    }
  }

  const tableRef = tableData?.tableRef
  const spacing = tableData?.spacing
  const noData = !tableData || resolvedRows.length === 0

  // Determine if Fp exceeds table range
  const fpExceeds = fp > 1.0

  async function handleExportPdf() {
    setExporting(true)
    try {
      await exportToPdf({
        formData,
        tableData: { spacing, rows: resolvedRows },
        tableType,
        tableRef,
        pipeWeight,
        getRodSize,
        MATERIAL_LABELS,
        INSTALL_LABELS,
        BRACE_LABELS,
        STRUCTURE_LABELS,
      })
    } finally {
      setExporting(false)
    }
  }

  return (
    <div className="results-wrapper">
      {/* Summary bar — top row: nav + actions */}
      <div className="results-topbar">
        <button className="btn-back" onClick={onBack}>← Modify Inputs</button>
        <div className="action-btns">
          <button
            className="btn-export-pdf"
            onClick={handleExportPdf}
            disabled={exporting || noData}
            title="Export bracing schedule as a formatted PDF with embedded detail drawings"
          >
            {exporting ? '⏳ Generating…' : '⬇ Export PDF'}
          </button>
          <button className="btn-print" onClick={() => window.print()} title="Print this page">
            🖨 Print
          </button>
        </div>
      </div>
      {/* Summary pills — second row */}
      <div className="summary-pills">
        <span className="pill">{MATERIAL_LABELS[material] || material}</span>
        {pipeSize && !isTrapeze && <span className="pill">{pipeSize}" dia.</span>}
        <span className="pill">{INSTALL_LABELS[installMethod]}</span>
        <span className="pill">{BRACE_LABELS[braceType]}</span>
        <span className="pill fp-pill">Ip = {formData.ip ?? 1.0} · Fp = {fp}g</span>
        <span className="pill">{STRUCTURE_LABELS[structure]}</span>
        {tableRef && <span className="pill table-pill">Table {tableRef}</span>}
      </div>

      {/* Fp warning */}
      {fpExceeds && (
        <div className="alert alert-warn">
          ⚠️ Fp = {fp}g exceeds standard B-table range (max 1.0g). Tables shown are for Fp = 1.0g.
          Contact a licensed engineer for higher Fp values. Maximum design limit = 2.5g.
        </div>
      )}

      {noData && (
        <div className="alert alert-error">
          ⚠️ No standard table found for this combination. This pipe size/material may require
          engineered design. Consult a licensed seismic engineer.
        </div>
      )}

      {/* ===== MAIN RESULTS CARD ===== */}
      {!noData && (
        <div className="results-card">
          <div className="results-card-header">
            <div>
              <h2 className="results-title">Seismic Bracing Schedule</h2>
              <p className="results-subtitle">
                Reference Table: {tableRef && <OpmLink pageRef={tableRef} label={tableRef} />} &nbsp;|&nbsp;
                Fp = {fpTier}g (ASD) &nbsp;|&nbsp; Fpv = 0.375g (ASD) &nbsp;|&nbsp; 45° Brace Angle
              </p>
            </div>
          </div>

          {/* Brace Spacing */}
          <section className="results-section">
            <h3 className="section-title">📐 Maximum Brace Spacing</h3>
            <div className="spacing-grid">
              <div className="spacing-card">
                <div className="spacing-label">Transverse</div>
                <div className="spacing-value">{spacing?.trans ?? '—'} ft</div>
              </div>
              <div className="spacing-card">
                <div className="spacing-label">Longitudinal</div>
                <div className="spacing-value">{spacing?.long ?? '—'} ft</div>
              </div>
              <div className="spacing-card">
                <div className="spacing-label">All-Directional</div>
                <div className="spacing-value">{spacing?.allDir ?? '—'} ft</div>
              </div>
              {pipeWeight && (
                <div className="spacing-card highlight">
                  <div className="spacing-label">Pipe Weight</div>
                  <div className="spacing-value">{pipeWeight} lbs/ft</div>
                </div>
              )}
            </div>

            {/* Code-required hanger spacing */}
            <div className="hanger-code-bar">
              <span className="hanger-code-icon">📎</span>
              <div className="hanger-code-text">
                <strong>Max Hanger Spacing: {hangerInfo.spacing} ft</strong>
                <span className="hanger-code-ref"> — {hangerInfo.note}</span>
              </div>
              <span className="hanger-code-badge">{hangerInfo.code}</span>
            </div>
          </section>

          {/* Detail Table */}
          <section className="results-section">
            <h3 className="section-title">📋 Installation Details &amp; Connection Designations</h3>
            <p className="section-note">
              Click any detail code to open the corresponding detail drawing.
            </p>
            <div className="table-scroll">
              {/* ---- Individually Hung — Solid ---- */}
              {tableType === 'indiv-solid' && (
                <table className="brace-table">
                  <thead>
                    <tr>
                      <th rowSpan={2}>Size</th>
                      <th rowSpan={2}>PLF</th>
                      <th rowSpan={2}>Max Support Spacing (ft)</th>
                      <th colSpan={3} className="th-group brace-group">Kit Installation Details</th>
                      <th colSpan={3} className="th-group hanger-group">Hanger Connection</th>
                      <th colSpan={2} className="th-group brace-conn-group">Brace Connection</th>
                      <th colSpan={2} className="th-group rod-group">Rod Size</th>
                    </tr>
                    <tr>
                      <th className="brace-group">Trans.</th>
                      <th className="brace-group">Long.</th>
                      <th className="brace-group">All-Dir.</th>
                      <th className="hanger-group">Trans.</th>
                      <th className="hanger-group">Long.</th>
                      <th className="hanger-group">All-Dir.</th>
                      <th className="brace-conn-group">Trans.</th>
                      <th className="brace-conn-group">Long./All-Dir.</th>
                      <th className="rod-group">Hanger</th>
                      <th className="rod-group">Brace</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resolvedRows.map((row, i) => (
                      <tr key={i} className={row.size === Number(pipeSize) ? 'row-highlight' : ''}>
                        <td className="td-size">{row.size}"</td>
                        <td>{row.plf}</td>
                        <td>{row.supportSpacing}</td>
                        <td><DetailCode code={row.trans} /></td>
                        <td><DetailCode code={row.long} /></td>
                        <td><DetailCode code={row.allDir} /></td>
                        <td><DesigCode code={row.hangerTrans} type="hanger" /></td>
                        <td><DesigCode code={row.hangerLong} type="hanger" /></td>
                        <td><DesigCode code={row.hangerAllDir} type="hanger" /></td>
                        <td><DesigCode code={row.braceTrans} type="brace" structure={structure} /></td>
                        <td><DesigCode code={row.braceLongAllDir} type="brace" structure={structure} /></td>
                        <td>{getRodSize(row.hangerTrans)}</td>
                        <td>{getRodSize(row.braceTrans)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* ---- Individually Hung — Cable ---- */}
              {tableType === 'indiv-cable' && (
                <table className="brace-table">
                  <thead>
                    <tr>
                      <th rowSpan={2}>Size</th>
                      <th rowSpan={2}>PLF</th>
                      <th rowSpan={2}>Max Support Spacing (ft)</th>
                      <th colSpan={3} className="th-group brace-group">Kit Installation Details</th>
                      <th rowSpan={2} className="hanger-group">Hanger Connection</th>
                      <th colSpan={2} className="th-group brace-conn-group">Brace Connection</th>
                      <th colSpan={2} className="th-group rod-group">Rod Size</th>
                    </tr>
                    <tr>
                      <th className="brace-group">Trans.</th>
                      <th className="brace-group">Long.</th>
                      <th className="brace-group">All-Dir.</th>
                      <th className="brace-conn-group">Trans.</th>
                      <th className="brace-conn-group">Long./All-Dir.</th>
                      <th className="rod-group">Hanger</th>
                      <th className="rod-group">Brace</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resolvedRows.map((row, i) => (
                      <tr key={i} className={row.size === Number(pipeSize) ? 'row-highlight' : ''}>
                        <td className="td-size">{row.size}"</td>
                        <td>{row.plf}</td>
                        <td>{row.supportSpacing}</td>
                        <td><DetailCode code={row.trans} /></td>
                        <td><DetailCode code={row.long} /></td>
                        <td><DetailCode code={row.allDir} /></td>
                        <td><DesigCode code={row.hangerConn} type="hanger" /></td>
                        <td><DesigCode code={row.braceTrans} type="brace" structure={structure} /></td>
                        <td><DesigCode code={row.braceLongAllDir} type="brace" structure={structure} /></td>
                        <td>{getRodSize(row.hangerConn)}</td>
                        <td>{getRodSize(row.braceTrans)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* ---- Trapeze — Solid ---- */}
              {tableType === 'trapeze-solid' && (
                <table className="brace-table">
                  <thead>
                    <tr>
                      <th rowSpan={2}>Trapeze Load (lbs/ft)</th>
                      <th colSpan={3} className="th-group brace-group">Kit Installation Details</th>
                      <th colSpan={2} className="th-group hanger-group">Hanger Attachment</th>
                      <th rowSpan={2} className="brace-conn-group">Brace Type</th>
                      <th colSpan={2} className="th-group rod-group">Rod Size</th>
                    </tr>
                    <tr>
                      <th className="brace-group">Trans.</th>
                      <th className="brace-group">Long.</th>
                      <th className="brace-group">All-Dir.</th>
                      <th className="hanger-group">Trans./Long.</th>
                      <th className="hanger-group">All-Dir.</th>
                      <th className="rod-group">Hanger</th>
                      <th className="rod-group">Brace</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resolvedRows.map((row, i) => (
                      <tr key={i} className="row-highlight">
                        <td className="td-size">{row.weight} lbs/ft</td>
                        <td><DetailCode code={row.trans} /></td>
                        <td><DetailCode code={row.long} /></td>
                        <td><DetailCode code={row.allDir} /></td>
                        <td><DesigCode code={row.hangerTrans} type="hanger" /></td>
                        <td><DesigCode code={row.hangerAllDir} type="hanger" /></td>
                        <td><DesigCode code={row.braceType} type="brace" structure={structure} /></td>
                        <td>{getRodSize(row.hangerTrans)}</td>
                        <td>{getRodSize(row.braceType)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* ---- Trapeze — Cable Standard ---- */}
              {tableType === 'trapeze-cable-std' && (
                <table className="brace-table">
                  <thead>
                    <tr>
                      <th rowSpan={2}>Trapeze Load (lbs/ft)</th>
                      <th colSpan={3} className="th-group brace-group">Kit Installation Details</th>
                      <th colSpan={2} className="th-group hanger-group">Hanger Attachment</th>
                      <th colSpan={1} className="th-group rod-group">Rod Size</th>
                    </tr>
                    <tr>
                      <th className="brace-group">Trans.</th>
                      <th className="brace-group">Long.</th>
                      <th className="brace-group">All-Dir.</th>
                      <th className="hanger-group">Trans./Long.</th>
                      <th className="hanger-group">All-Dir.</th>
                      <th className="rod-group">Hanger</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resolvedRows.map((row, i) => (
                      <tr key={i} className="row-highlight">
                        <td className="td-size">{row.weight} lbs/ft</td>
                        <td><DetailCode code={row.trans} /></td>
                        <td><DetailCode code={row.long} /></td>
                        <td><DetailCode code={row.allDir} /></td>
                        <td><DesigCode code={row.hangerTrans} type="hanger" /></td>
                        <td><DesigCode code={row.hangerAllDir} type="hanger" /></td>
                        <td>{getRodSize(row.hangerTrans)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* ---- Trapeze — Cable X-Pattern ---- */}
              {tableType === 'trapeze-cable-x' && (
                <table className="brace-table">
                  <thead>
                    <tr>
                      <th>Trapeze Load (lbs/ft)</th>
                      <th className="brace-group">Kit Detail</th>
                      <th className="hanger-group">Hanger Attachment</th>
                      <th className="brace-conn-group">Brace Attachment</th>
                      <th className="rod-group">Hanger Rod Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resolvedRows.map((row, i) => (
                      <tr key={i} className="row-highlight">
                        <td className="td-size">{row.weight} lbs/ft</td>
                        <td><DetailCode code={row.kitDetail} /></td>
                        <td><DesigCode code={row.hangerAttach} type="hanger" /></td>
                        <td><DesigCode code={row.braceAttach} type="brace" structure={structure} /></td>
                        <td>{getRodSize(row.hangerAttach)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </section>

          {/* Quick Reference Links */}
          <section className="results-section">
            <h3 className="section-title">🔗 Quick Reference — Key Detail Pages</h3>
            <div className="ref-links-grid">
              <RefCard icon="📐" title="Design Procedure"     sub="A11.0 · PDF p.50"       pageNum={50} />
              <RefCard icon="📊" title="Force Equations (Fp)" sub="A10.0 · PDF p.37"       pageNum={37} />
              <RefCard icon="⚓" title="Anchor Test Values"   sub="A0.4 · PDF p.10"        pageNum={10} />
              {tableRef && (
                <RefCard
                  icon="📋"
                  title="Your Brace Table"
                  sub={`${tableRef} · PDF p.${OPM_PAGES[tableRef]?.pdf}`}
                  pageNum={OPM_PAGES[tableRef]?.pdf}
                  className="accent-card"
                />
              )}
              <RefCard icon="🗂" title="B-Tables (All Pipe)"  sub="B1.0–B1.20 · PDF p.155+" pageNum={155} />
              <RefCard icon="📖" title="Table of Contents"    sub="TOC · PDF p.4"           pageNum={4} />
            </div>
          </section>

          {/* General Notes */}
          <section className="results-section notes-section">
            <h3 className="section-title">📝 General Notes</h3>
            <ol className="notes-list">
              <li>See ASCE 7-22, Table 13.6-1 for Ap &amp; Rp values for mechanical/piping components.</li>
              <li>Maximum allowable brace angle is taken with respect to horizontal. See "Brace Angle Range" table on Seismic Brace Installation Detail for more info.</li>
              <li>See SBD sheets for brace to structure, hanger to structure, and other seismic bracing details.</li>
              <li>Maximum horizontal, allowable brace angle is taken with respect to horizontal.</li>
              <li>Hanger load to structure = (1 + F<sub>pv</sub>/g) × [Max. hanger trib. length × utility type weight × (trapeze reaction ratio)] × F<sub>p</sub>Tan(θ).</li>
              <li>Hanger concrete anchor design load = (1 + F<sub>pv</sub>/g) × utility weight × (overstrength factor Ω<sub>o</sub> = 2.0).</li>
              <li>For trapeze: support at least 2 pipes at 15:1–5:1 spacing. Use T2.x–T2.7 tables to select trapeze member.</li>
              <li>Construction should not begin until all approvals are in place including approval of submittals by owner's agents, consultants, and/or by building permit plan check.</li>
            </ol>
          </section>
        </div>
      )}
    </div>
  )
}
