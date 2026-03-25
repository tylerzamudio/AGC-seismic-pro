import jsPDF from 'jspdf'
import { PDFDocument, PDFName, PDFArray, PDFDict, PDFNumber } from 'pdf-lib'
import { OPM_PAGES } from '../data/braceData.js'

const BRAND_DARK  = [26, 39, 68]    // #1a2744
const BRAND_MID   = [45, 74, 138]   // #2d4a8a
const HANGER_COL  = [30, 90, 58]    // green
const BRACE_COL   = [124, 45, 18]   // rust
const ROD_COL     = [74, 29, 150]   // purple

/**
 * Exports the seismic bracing schedule to a self-contained PDF.
 * Kit detail code cells are clickable — clicking navigates to the
 * matching detail drawing extracted from the reference document and
 * embedded directly in the exported file (no external dependency).
 *
 * @param {object} formData   – questionnaire answers
 * @param {object} tableData  – resolved brace table rows + spacing
 * @param {string} tableType  – 'indiv-solid' | 'indiv-cable' | 'trapeze-solid' | etc.
 * @param {string} tableRef   – e.g. 'B1.1'
 * @param {number|null} pipeWeight
 * @param {function} getRodSize
 */
export async function exportToPdf({
  formData, tableData, tableType, tableRef, pipeWeight, getRodSize,
  MATERIAL_LABELS, INSTALL_LABELS, BRACE_LABELS, STRUCTURE_LABELS,
}) {
  const {
    material, pipeSize, installMethod, braceType,
    fp, ip, spacingOption, totalWeight, structure,
  } = formData

  const spacing  = tableData?.spacing  || {}
  const rows     = tableData?.rows     || []

  const pdf  = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'letter' })
  const PW   = pdf.internal.pageSize.getWidth()   // 279.4 mm
  const PH   = pdf.internal.pageSize.getHeight()  // 215.9 mm
  const ML   = 12   // left margin
  const MR   = 12   // right margin
  const MT   = 12   // top margin
  const CW   = PW - ML - MR  // usable content width

  let y = MT

  // ── helpers ──────────────────────────────────────────────────────────────
  function setFont(size, style = 'normal', color = [31, 41, 55]) {
    pdf.setFontSize(size)
    pdf.setFont('helvetica', style)
    pdf.setTextColor(...color)
  }
  function rect(x, ry, w, h, fillRgb, strokeRgb) {
    if (fillRgb)   { pdf.setFillColor(...fillRgb);   pdf.rect(x, ry, w, h, strokeRgb ? 'FD' : 'F') }
    if (strokeRgb) { pdf.setDrawColor(...strokeRgb); pdf.rect(x, ry, w, h, 'S') }
  }
  function hLine(ry, color = [226, 232, 240]) {
    pdf.setDrawColor(...color)
    pdf.setLineWidth(0.2)
    pdf.line(ML, ry, ML + CW, ry)
  }

  // ── HEADER BANNER ─────────────────────────────────────────────────────────
  rect(0, 0, PW, 22, BRAND_DARK)
  setFont(15, 'bold', [255,255,255])
  pdf.text('Seismic Bracing Schedule', ML + 2, 9)
  setFont(7.5, 'normal', [180, 195, 225])
  pdf.text('AGC Seismic Pro  ·  Seismic Bracing Design Tool  ·  CBC 2025  ·  ASCE 7-22', ML + 2, 15.5)

  // badges
  ;[['CBC 2025', PW - 48], ['ASCE 7-22', PW - 26]].forEach(([lbl, bx]) => {
    rect(bx, 6.5, 13, 7, [255,255,255,0], [200,210,230])
    pdf.setDrawColor(...BRAND_MID)
    pdf.roundedRect(bx, 6.5, 13, 7, 1.5, 1.5, 'S')
    setFont(6.5, 'bold', [200,220,255])
    pdf.text(lbl, bx + 6.5, 11.5, { align: 'center' })
  })

  y = 26

  // ── SUMMARY PILLS ROW ─────────────────────────────────────────────────────
  const pills = [
    MATERIAL_LABELS[material] || material,
    !isTrapeze(installMethod) ? `${pipeSize}" dia.` : null,
    INSTALL_LABELS[installMethod],
    BRACE_LABELS[braceType],
    `Ip = ${ip ?? 1.0} · Fp = ${fp}g`,
    STRUCTURE_LABELS[structure],
    tableRef ? `Table ${tableRef}` : null,
  ].filter(Boolean)

  let px = ML
  setFont(6.5, 'normal', [55, 65, 81])
  pills.forEach(pill => {
    const w = pdf.getTextWidth(pill) + 6
    pdf.setDrawColor(209, 213, 219)
    pdf.setFillColor(248, 250, 252)
    pdf.roundedRect(px, y, w, 6, 1.5, 1.5, 'FD')
    if (pill.startsWith('Fp')) {
      pdf.setFillColor(219, 234, 254)
      pdf.setDrawColor(147, 197, 253)
      pdf.roundedRect(px, y, w, 6, 1.5, 1.5, 'FD')
      setFont(6.5, 'bold', [29, 78, 216])
    } else {
      setFont(6.5, 'normal', [55, 65, 81])
    }
    pdf.text(pill, px + 3, y + 4.2)
    px += w + 2.5
  })
  y += 10

  // ── BRACE SPACING BOXES ───────────────────────────────────────────────────
  setFont(8, 'bold', BRAND_DARK)
  pdf.text('Maximum Brace Spacing', ML, y + 1)
  hLine(y + 3)
  y += 6

  const boxes = [
    { label: 'TRANSVERSE',      val: spacing.trans  != null ? `${spacing.trans} ft`  : '—' },
    { label: 'LONGITUDINAL',    val: spacing.long   != null ? `${spacing.long} ft`   : '—' },
    { label: 'ALL-DIRECTIONAL', val: spacing.allDir != null ? `${spacing.allDir} ft` : '—' },
    ...(pipeWeight ? [{ label: 'PIPE WEIGHT', val: `${pipeWeight} lbs/ft`, highlight: true }] : []),
    ...(totalWeight ? [{ label: 'TRAPEZE LOAD', val: `${totalWeight} lbs/ft`, highlight: true }] : []),
  ]
  const bw = 40
  boxes.forEach((box, i) => {
    const bx = ML + i * (bw + 3)
    const fill = box.highlight ? [219, 234, 254] : [248, 250, 252]
    const stroke = box.highlight ? [147, 197, 253] : [226, 232, 240]
    rect(bx, y, bw, 16, fill, stroke)
    setFont(5.5, 'bold', [107, 114, 128])
    pdf.text(box.label, bx + bw / 2, y + 5, { align: 'center' })
    setFont(12, 'bold', BRAND_DARK)
    pdf.text(box.val, bx + bw / 2, y + 13, { align: 'center' })
  })
  y += 20

  // ── INSTALLATION DETAILS TABLE ────────────────────────────────────────────
  setFont(8, 'bold', BRAND_DARK)
  pdf.text('Installation Details & Connection Designations', ML, y + 1)
  hLine(y + 3)
  y += 7

  // Build columns based on table type
  let cols = []
  if (tableType === 'indiv-solid') {
    cols = [
      { header: 'SIZE',     key: r => `${r.size}"`,         w: 12, group: 'info' },
      { header: 'PLF',      key: r => `${r.plf}`,           w: 13, group: 'info' },
      { header: 'MAX SUPP', key: r => `${r.supportSpacing} ft`, w: 16, group: 'info' },
      { header: 'TRANS',    key: r => r.trans,               w: 18, group: 'kit' },
      { header: 'LONG.',    key: r => r.long,                w: 18, group: 'kit' },
      { header: 'ALL-DIR',  key: r => r.allDir,              w: 18, group: 'kit' },
      { header: 'H-TRANS',  key: r => r.hangerTrans,         w: 16, group: 'hanger' },
      { header: 'H-LONG',   key: r => r.hangerLong,          w: 16, group: 'hanger' },
      { header: 'H-ALLDIR', key: r => r.hangerAllDir,        w: 16, group: 'hanger' },
      { header: 'B-TRANS',  key: r => r.braceTrans,          w: 16, group: 'brace' },
      { header: 'B-L/ALL',  key: r => r.braceLongAllDir,     w: 16, group: 'brace' },
      { header: 'HNGR ROD', key: r => getRodSize(r.hangerTrans), w: 18, group: 'rod' },
      { header: 'BRC ROD',  key: r => getRodSize(r.braceTrans),  w: 18, group: 'rod' },
    ]
  } else if (tableType === 'indiv-cable') {
    cols = [
      { header: 'SIZE',     key: r => `${r.size}"`,         w: 12, group: 'info' },
      { header: 'PLF',      key: r => `${r.plf}`,           w: 13, group: 'info' },
      { header: 'MAX SUPP', key: r => `${r.supportSpacing} ft`, w: 16, group: 'info' },
      { header: 'TRANS',    key: r => r.trans,               w: 18, group: 'kit' },
      { header: 'LONG.',    key: r => r.long,                w: 18, group: 'kit' },
      { header: 'ALL-DIR',  key: r => r.allDir,              w: 18, group: 'kit' },
      { header: 'HNGR CONN',key: r => r.hangerConn,         w: 18, group: 'hanger' },
      { header: 'B-TRANS',  key: r => r.braceTrans,          w: 16, group: 'brace' },
      { header: 'B-L/ALL',  key: r => r.braceLongAllDir,     w: 16, group: 'brace' },
      { header: 'HNGR ROD', key: r => getRodSize(r.hangerConn), w: 18, group: 'rod' },
      { header: 'BRC ROD',  key: r => getRodSize(r.braceTrans), w: 18, group: 'rod' },
    ]
  } else if (tableType === 'trapeze-solid') {
    cols = [
      { header: 'LOAD (lbs/ft)', key: r => `${r.weight}`,      w: 22, group: 'info' },
      { header: 'TRANS KIT',     key: r => r.trans,             w: 22, group: 'kit' },
      { header: 'LONG KIT',      key: r => r.long,              w: 22, group: 'kit' },
      { header: 'ALL-DIR KIT',   key: r => r.allDir,            w: 22, group: 'kit' },
      { header: 'H-TRANS/LONG',  key: r => r.hangerTrans,       w: 20, group: 'hanger' },
      { header: 'H-ALL-DIR',     key: r => r.hangerAllDir,      w: 20, group: 'hanger' },
      { header: 'BRACE TYPE',    key: r => r.braceType,         w: 20, group: 'brace' },
      { header: 'HNGR ROD',      key: r => getRodSize(r.hangerTrans), w: 20, group: 'rod' },
      { header: 'BRC ROD',       key: r => getRodSize(r.braceType),   w: 20, group: 'rod' },
    ]
  } else if (tableType === 'trapeze-cable-std') {
    cols = [
      { header: 'LOAD (lbs/ft)', key: r => `${r.weight}`,   w: 25, group: 'info' },
      { header: 'TRANS KIT',     key: r => r.trans,          w: 25, group: 'kit' },
      { header: 'LONG KIT',      key: r => r.long,           w: 25, group: 'kit' },
      { header: 'ALL-DIR KIT',   key: r => r.allDir,         w: 25, group: 'kit' },
      { header: 'H-TRANS/LONG',  key: r => r.hangerTrans,    w: 25, group: 'hanger' },
      { header: 'H-ALL-DIR',     key: r => r.hangerAllDir,   w: 25, group: 'hanger' },
      { header: 'HNGR ROD',      key: r => getRodSize(r.hangerTrans), w: 25, group: 'rod' },
    ]
  } else if (tableType === 'trapeze-cable-x') {
    cols = [
      { header: 'LOAD (lbs/ft)',  key: r => `${r.weight}`,    w: 40, group: 'info' },
      { header: 'KIT DETAIL',     key: r => r.kitDetail,      w: 40, group: 'kit' },
      { header: 'HNGR ATTACH',    key: r => r.hangerAttach,   w: 40, group: 'hanger' },
      { header: 'BRACE ATTACH',   key: r => r.braceAttach,    w: 40, group: 'brace' },
      { header: 'HNGR ROD',       key: r => getRodSize(r.hangerAttach), w: 40, group: 'rod' },
    ]
  }

  // Scale cols to fit content width
  const totalColW = cols.reduce((s, c) => s + c.w, 0)
  const scale = CW / totalColW
  const scaledCols = cols.map(c => ({ ...c, w: c.w * scale }))

  const groupColors = {
    info:   { header: [26, 39, 68],   text: [31, 41, 55],   bg: [248, 250, 252] },
    kit:    { header: [45, 74, 138],  text: [29, 78, 200],  bg: [239, 246, 255] },
    hanger: { header: [30, 90, 58],   text: [21, 128, 61],  bg: [240, 253, 244] },
    brace:  { header: [124, 45, 18],  text: [154, 52, 18],  bg: [255, 247, 237] },
    rod:    { header: [74, 29, 150],  text: [109, 40, 217], bg: [250, 245, 255] },
  }

  const ROW_H  = 7
  const HEAD_H = 9
  let tx = ML

  // Group header row
  const groups = {}
  scaledCols.forEach(c => {
    if (!groups[c.group]) groups[c.group] = { w: 0, startX: tx + Object.values(groups).reduce((s,g)=>s+g.w,0) }
    groups[c.group].w += c.w
  })
  // Draw group headers
  let gx = ML
  scaledCols.forEach(c => {
    if (!groups[c.group]._drawn) {
      const gc = groupColors[c.group]
      rect(gx, y, groups[c.group].w, 5.5, gc.header, gc.header)
      setFont(5.5, 'bold', [255,255,255])
      const label = {
        info: 'PIPE INFO', kit: 'KIT INSTALLATION DETAILS',
        hanger: 'HANGER CONNECTION', brace: 'BRACE CONNECTION', rod: 'ROD SIZE'
      }[c.group]
      pdf.text(label, gx + groups[c.group].w / 2, y + 4, { align: 'center' })
      groups[c.group]._drawn = true
    }
    gx += c.w
  })
  y += 5.5

  // Column header row
  gx = ML
  scaledCols.forEach(c => {
    const gc = groupColors[c.group]
    rect(gx, y, c.w, HEAD_H, gc.header.map(v => Math.max(0, v - 20)), null)
    pdf.setDrawColor(255, 255, 255)
    pdf.setLineWidth(0.15)
    pdf.rect(gx, y, c.w, HEAD_H, 'S')
    setFont(5, 'bold', [255,255,255])
    const lines = splitText(pdf, c.header, c.w - 2)
    lines.forEach((line, li) => pdf.text(line, gx + c.w / 2, y + 3 + li * 3, { align: 'center' }))
    gx += c.w
  })
  y += HEAD_H

  // Data rows
  // kitLinkAreas: records bounding boxes (mm, jsPDF top-left origin) of kit cells
  // that have a matching OPM_PAGES entry so we can add GoTo annotations later.
  const kitLinkAreas = []

  rows.forEach((row, ri) => {
    const isHighlight = ri === 0  // matched row
    if (y + ROW_H > PH - 20) {
      pdf.addPage()
      y = MT + 5
    }
    gx = ML
    scaledCols.forEach(c => {
      const gc = groupColors[c.group]
      const fill = isHighlight ? [254, 249, 195] : gc.bg
      rect(gx, y, c.w, ROW_H, fill, [226, 232, 240])
      const val = c.key(row) || '—'
      setFont(6, isHighlight ? 'bold' : 'normal', gc.text)
      pdf.text(val, gx + c.w / 2, y + 4.8, { align: 'center' })

      // Kit cells with known detail pages: draw underline + record link area
      if (c.group === 'kit' && val !== '—' && OPM_PAGES[val]) {
        const tw = pdf.getTextWidth(val)
        const tx0 = gx + c.w / 2 - tw / 2
        pdf.setDrawColor(29, 78, 200)
        pdf.setLineWidth(0.25)
        pdf.line(tx0, y + 5.4, tx0 + tw, y + 5.4)
        kitLinkAreas.push({ opmPageNum: OPM_PAGES[val].pdf, x: gx, y, w: c.w, h: ROW_H })
      }

      gx += c.w
    })
    y += ROW_H
  })

  y += 6

  // ── QUICK REFERENCE LINKS ─────────────────────────────────────────────────
  if (y + 24 < PH - 20) {
    setFont(8, 'bold', BRAND_DARK)
    pdf.text('Quick Reference — Key Detail Pages', ML, y)
    hLine(y + 2)
    y += 6

    const refs = [
      { title: 'Design Procedure', sub: 'A11.0 · p.50' },
      { title: 'Force Equations', sub: 'A10.0 · p.37' },
      { title: 'Anchor Test Values', sub: 'A0.4 · p.10' },
      tableRef ? { title: `Brace Table ${tableRef}`, sub: `p.${tableRefPage(tableRef)}` } : null,
      { title: 'B-Tables (All Pipe)', sub: 'B1.0–B1.20 · p.155+' },
    ].filter(Boolean)

    const rw = (CW - (refs.length - 1) * 3) / refs.length
    refs.forEach((ref, i) => {
      const rx = ML + i * (rw + 3)
      rect(rx, y, rw, 12, [248, 250, 252], [226, 232, 240])
      setFont(6.5, 'bold', BRAND_DARK)
      pdf.text(ref.title, rx + rw / 2, y + 5, { align: 'center' })
      setFont(5.5, 'normal', [156, 163, 175])
      pdf.text(ref.sub, rx + rw / 2, y + 9.5, { align: 'center' })
    })
    y += 16
  }

  // ── GENERAL NOTES ─────────────────────────────────────────────────────────
  if (y + 10 < PH - 20) {
    setFont(7.5, 'bold', BRAND_DARK)
    pdf.text('General Notes', ML, y)
    hLine(y + 2)
    y += 5

    const notes = [
      'See ASCE 7-22, Table 13.6-1 for Ap & Rp values for mechanical/piping components.',
      'Maximum allowable brace angle is taken with respect to horizontal.',
      'See SBD sheets for brace-to-structure, hanger-to-structure, and other seismic bracing details.',
      'Hanger load to structure = (1 + Fpv/g) × [Max. hanger trib. length × weight × (reaction ratio)] × Fp×Tan(θ).',
      'Hanger concrete anchor design load = (1 + Fpv/g) × utility weight × (overstrength factor Ωo = 2.0).',
      'For trapeze: support at least 2 pipes at 15:1–5:1 spacing. Use T2.x–T2.7 tables to select trapeze member.',
      'Construction should not begin until all approvals are in place (owner\'s agents, consultants, building permit).',
    ]

    notes.forEach((note, ni) => {
      if (y + 4 > PH - 12) return
      setFont(5.8, 'normal', [75, 85, 99])
      pdf.text(`${ni + 1}.  ${note}`, ML + 2, y)
      y += 4.2
    })
  }

  // ── FOOTER ────────────────────────────────────────────────────────────────
  const totalPages = pdf.internal.getNumberOfPages()
  for (let p = 1; p <= totalPages; p++) {
    pdf.setPage(p)
    rect(0, PH - 10, PW, 10, BRAND_DARK)
    setFont(5.5, 'normal', [156, 163, 175])
    pdf.text(
      `AGC Seismic Pro  ·  Seismic Bracing Design Tool  ·  CBC 2025  ·  ASCE 7-22`,
      PW / 2, PH - 5, { align: 'center' }
    )
    setFont(5.5, 'normal', [156, 163, 175])
    pdf.text(`Page ${p} of ${totalPages}`, PW - MR, PH - 5, { align: 'right' })
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    pdf.text(`Generated: ${today}`, ML, PH - 5)
  }

  // ── SAVE (self-contained with embedded detail pages) ──────────────────────
  const matLabel = (MATERIAL_LABELS[material] || material).replace(/\s+/g, '-')
  const filename = `Seismic-Brace-Schedule_${matLabel}_${isTrapeze(installMethod) ? 'Trapeze' : pipeSize + 'in'}_Fp${fp}g.pdf`

  // Collect unique OPM page numbers referenced by kit cells (sorted ascending)
  const uniqueOpmPages = [...new Set(kitLinkAreas.map(a => a.opmPageNum))].sort((a, b) => a - b)

  if (uniqueOpmPages.length === 0) {
    // No kit detail codes found — save schedule only
    pdf.save(filename)
    return
  }

  try {
    // ── 1. Fetch extracted OPM detail pages from dev-server endpoint ──────
    const resp = await fetch('/api/opm-pages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pages: uniqueOpmPages }),
    })
    if (!resp.ok) throw new Error(`/api/opm-pages returned ${resp.status}: ${await resp.text()}`)
    const extractedBytes = await resp.arrayBuffer()

    // ── 2. Load jsPDF schedule output into pdf-lib ────────────────────────
    const jsPdfBytes = pdf.output('arraybuffer')
    const mainDoc = await PDFDocument.load(jsPdfBytes)
    const extractedDoc = await PDFDocument.load(extractedBytes)

    // ── 3. Copy all extracted detail pages into the main document ─────────
    // Schedule = page index 0; detail pages start at index 1, 2, 3 …
    const detailPageCount = extractedDoc.getPageCount()
    const copiedPages = await mainDoc.copyPagesFrom(
      extractedDoc,
      [...Array(detailPageCount).keys()],
    )
    copiedPages.forEach(p => mainDoc.addPage(p))

    // Map opmPageNum → page index inside mainDoc (1-based; 0 = schedule)
    const opmToDocIndex = {}
    uniqueOpmPages.forEach((pNum, i) => { opmToDocIndex[pNum] = i + 1 })

    // ── 4. Add internal GoTo link annotations on the schedule page ────────
    // PDF coordinate system: origin = bottom-left, y increases upward.
    // jsPDF coordinate system: origin = top-left,  y increases downward (mm).
    // Landscape Letter in points: 792 × 612 pts.
    const schedulePage = mainDoc.getPage(0)
    const { height: pgH } = schedulePage.getSize()  // 612 pts
    const MM = 72 / 25.4                             // mm → pts

    const annotRefs = []
    for (const area of kitLinkAreas) {
      const docPageIdx = opmToDocIndex[area.opmPageNum]
      if (docPageIdx === undefined) continue
      const destPage = mainDoc.getPage(docPageIdx)

      // Convert jsPDF mm (top-left) → PDF pts (bottom-left)
      const x1 = area.x * MM
      const y1 = pgH - (area.y + area.h) * MM   // bottom edge of cell
      const x2 = (area.x + area.w) * MM
      const y2 = pgH - area.y * MM               // top edge of cell

      // Build /Dest array: [pageRef, /Fit]
      const destArr = PDFArray.withContext(mainDoc.context)
      destArr.push(destPage.ref)
      destArr.push(PDFName.of('Fit'))

      // Build /Rect array
      const rectArr = PDFArray.withContext(mainDoc.context)
      ;[x1, y1, x2, y2].forEach(v => rectArr.push(PDFNumber.of(v)))

      // Build /Border [0 0 0] (invisible border; underline drawn by jsPDF)
      const borderArr = PDFArray.withContext(mainDoc.context)
      ;[0, 0, 0].forEach(v => borderArr.push(PDFNumber.of(v)))

      // Assemble annotation dictionary
      const annotDict = PDFDict.withContext(mainDoc.context)
      annotDict.set(PDFName.of('Type'),    PDFName.of('Annot'))
      annotDict.set(PDFName.of('Subtype'), PDFName.of('Link'))
      annotDict.set(PDFName.of('Rect'),    rectArr)
      annotDict.set(PDFName.of('Border'),  borderArr)
      annotDict.set(PDFName.of('Dest'),    destArr)

      annotRefs.push(mainDoc.context.register(annotDict))
    }

    if (annotRefs.length > 0) {
      const annotsArr = PDFArray.withContext(mainDoc.context)
      annotRefs.forEach(ref => annotsArr.push(ref))
      schedulePage.node.set(PDFName.of('Annots'), annotsArr)
    }

    // ── 5. Save merged PDF and trigger browser download ───────────────────
    const mergedBytes = await mainDoc.save()
    const blob = new Blob([mergedBytes], { type: 'application/pdf' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

  } catch (err) {
    console.warn('[exportPdf] Could not embed detail pages, saving schedule only:', err.message)
    // Graceful fallback: save the schedule PDF without embedded detail pages
    pdf.save(filename)
  }
}

// ── helpers ─────────────────────────────────────────────────────────────────
function isTrapeze(installMethod) { return installMethod === 'trapeze' }

function tableRefPage(ref) {
  const map = {
    'B1.0': 155, 'B1.1': 157, 'B1.2': 159, 'B1.3': 161, 'B1.4': 162, 'B1.5': 163,
    'B1.6': 164, 'B1.7': 165, 'B1.8': 166, 'B1.9': 167, 'B1.10': 168, 'B1.11': 169,
    'B1.12': 170, 'B1.13': 172, 'B1.14': 174, 'B1.15': 176, 'B1.16': 177,
    'B1.17': 178, 'B1.18': 179, 'B1.19': 180, 'B1.20': 181,
  }
  return map[ref] || '—'
}

function splitText(pdf, text, maxWidth) {
  const words = text.split(' ')
  const lines = []
  let current = ''
  words.forEach(word => {
    const test = current ? `${current} ${word}` : word
    if (pdf.getTextWidth(test) > maxWidth && current) {
      lines.push(current)
      current = word
    } else {
      current = test
    }
  })
  if (current) lines.push(current)
  return lines
}
