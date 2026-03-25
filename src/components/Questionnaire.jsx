import { useState, useEffect, useRef } from 'react'
import { PIPE_WEIGHTS } from '../data/braceData'

// ---- Config options ----
const SERVICE_TYPES = [
  { value: 'pipe', label: 'Mechanical / Plumbing Pipe' },
  { value: 'firePipe', label: 'Fire Protection / Sprinkler Pipe' },
  { value: 'duct', label: 'Ductwork (Rectangular / Round)' },
  { value: 'conduit', label: 'Electrical Conduit / Cable Tray' },
]

const PIPE_MATERIALS = {
  pipe: [
    { value: 'steel', label: 'Steel (Sch 10+)' },
    { value: 'castIron', label: 'Cast Iron (2"–12")' },
    { value: 'copperTypeK', label: 'Copper Type K (up to 8")' },
    { value: 'copperWithInsulation', label: 'Copper w/ Insulation (up to 8")' },
  ],
  firePipe: [
    { value: 'fireSprinkler_sch10', label: 'Steel Sch 10 (up to 8")' },
    { value: 'fireSprinkler_sch40', label: 'Steel Sch 40 (up to 12")' },
  ],
  duct: [
    { value: 'rectDuct', label: 'Galvanized Rectangular Duct' },
    { value: 'roundDuct', label: 'Galvanized Round Duct' },
  ],
  conduit: [
    { value: 'rmc', label: 'RMC Conduit (up to 6")' },
    { value: 'imc', label: 'IMC Conduit (up to 4")' },
    { value: 'emt', label: 'EMT Conduit (up to 4")' },
    { value: 'cableTray', label: 'Cable Tray (Ladder Type)' },
  ],
}

const PIPE_SIZES = {
  steel: [2, 2.5, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 24, 30],
  castIron: [2, 3, 4, 5, 6, 8, 10, 12],
  copperTypeK: [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 4, 6, 8],
  copperWithInsulation: [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 4, 6, 8],
  fireSprinkler_sch10: [1, 1.25, 1.5, 2, 2.5, 3, 4, 6, 8],
  fireSprinkler_sch40: [1, 1.25, 1.5, 2, 2.5, 3, 4, 6, 8, 10, 12],
  rmc: [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6],
  imc: [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 3.5, 4],
  emt: [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 3.5, 4],
  cableTray: null,
  rectDuct: null,
  roundDuct: [3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 36, 42, 48, 54, 60, 72, 84],
}

const INSTALL_METHODS = [
  { value: 'individual', label: 'Individually Hung (clevis / rod hanger per pipe)' },
  { value: 'trapeze', label: 'Trapeze (multiple pipes on a common support)' },
]

const BRACE_TYPES = [
  { value: 'solid', label: 'Solid / Rigid Brace (SBD hardware)' },
  { value: 'cableStd', label: 'Cable Brace — Standard (2-cable set)' },
  { value: 'cableX', label: 'Cable Brace — X-Pattern (trapeze only)' },
]

const IP_OPTIONS = [
  {
    value: 1.0,
    label: 'Ip = 1.0 — Standard Occupancy',
    desc: 'Commercial, industrial, residential (typical) → Fp = 0.5g',
  },
  {
    value: 1.5,
    label: 'Ip = 1.5 — Essential Facility',
    desc: 'Hospitals, fire stations, hazardous materials → Fp = 1.0g',
  },
]

const SPACING_OPTIONS = [
  { value: 1, label: 'Option 1 — Maximum transverse spacing (most common)' },
  { value: 3, label: 'Option 3 — Reduced transverse spacing (tighter brace)' },
]

// All material types allowed on a trapeze (mixed services common)
const TRAPEZE_MATERIALS = [
  { value: 'steel',                label: 'Steel Pipe (Sch 10+)' },
  { value: 'castIron',             label: 'Cast Iron Pipe' },
  { value: 'copperTypeK',          label: 'Copper Type K' },
  { value: 'copperWithInsulation', label: 'Copper w/ Insulation' },
  { value: 'fireSprinkler_sch10',  label: 'Fire Sprinkler Sch 10' },
  { value: 'fireSprinkler_sch40',  label: 'Fire Sprinkler Sch 40' },
  { value: 'rmc',                  label: 'RMC Conduit' },
  { value: 'imc',                  label: 'IMC Conduit' },
  { value: 'emt',                  label: 'EMT Conduit' },
  { value: 'cableTray',            label: 'Cable Tray' },
  { value: 'rectDuct',             label: 'Rectangular Duct' },
  { value: 'roundDuct',            label: 'Round Duct' },
]

export default function Questionnaire({ onSubmit, initialData }) {
  const [serviceType, setServiceType] = useState(initialData?.serviceType || 'pipe')
  const [material, setMaterial] = useState(initialData?.material || 'steel')
  const [pipeSize, setPipeSize] = useState(initialData?.pipeSize || 4)
  const [installMethod, setInstallMethod] = useState(initialData?.installMethod || 'individual')
  const [braceType, setBraceType] = useState(initialData?.braceType || 'solid')
  const [ip, setIp] = useState(initialData?.ip || 1.0)
  const [spacingOption, setSpacingOption] = useState(initialData?.spacingOption || 1)
  const [structure, setStructure] = useState(initialData?.structure || 'concrete')

  // Multi-pipe trapeze schedule
  const nextRowId = useRef(2)
  const [trapezeRows, setTrapezeRows] = useState(
    initialData?.trapezeRows?.length
      ? initialData.trapezeRows
      : [{ id: 1, material: 'steel', pipeSize: 4, qty: 1, manualPlf: '' }]
  )

  function addTrapezeRow() {
    setTrapezeRows(prev => [...prev, {
      id: nextRowId.current++,
      material: 'steel', pipeSize: 4, qty: 1, manualPlf: '',
    }])
  }

  function removeTrapezeRow(id) {
    setTrapezeRows(prev => prev.filter(r => r.id !== id))
  }

  function updateTrapezeRow(id, field, value) {
    setTrapezeRows(prev => prev.map(r => {
      if (r.id !== id) return r
      const updated = { ...r, [field]: value }
      if (field === 'material') {
        const sizes = PIPE_SIZES[value]
        updated.pipeSize = sizes ? sizes[Math.min(2, sizes.length - 1)] : 4
        updated.manualPlf = ''
      }
      return updated
    }))
  }

  // Total lbs/ft for the trapeze — auto where weight table exists, else manual
  const totalTrapezePlf = trapezeRows.reduce((sum, row) => {
    const autoW = PIPE_WEIGHTS[row.material]?.[Number(row.pipeSize)]
    const unitPlf = autoW != null ? autoW : (parseFloat(row.manualPlf) || 0)
    return sum + unitPlf * (parseInt(row.qty) || 1)
  }, 0)

  // Reset material + size when service type changes
  useEffect(() => {
    const mats = PIPE_MATERIALS[serviceType]
    if (mats && !mats.find(m => m.value === material)) {
      setMaterial(mats[0].value)
      const sizes = PIPE_SIZES[mats[0].value]
      if (sizes) setPipeSize(sizes[2] || sizes[0])
    }
  }, [serviceType])

  // Reset size when material changes
  useEffect(() => {
    const sizes = PIPE_SIZES[material]
    if (sizes && !sizes.includes(Number(pipeSize))) {
      setPipeSize(sizes[Math.min(2, sizes.length - 1)])
    }
  }, [material])

  // X-pattern only available for trapeze
  useEffect(() => {
    if (installMethod === 'individual' && braceType === 'cableX') {
      setBraceType('solid')
    }
  }, [installMethod])

  const materials = PIPE_MATERIALS[serviceType] || []
  const sizes = PIPE_SIZES[material]
  const isTrapeze = installMethod === 'trapeze'
  const isDuct = serviceType === 'duct'
  const isConduit = serviceType === 'conduit'

  function handleSubmit(e) {
    e.preventDefault()
    const calculatedFp = Number(ip) === 1.5 ? 1.0 : 0.5
    onSubmit({
      serviceType, material, pipeSize: Number(pipeSize), installMethod,
      braceType, ip: Number(ip), fp: calculatedFp,
      spacingOption: Number(spacingOption),
      totalWeight: isTrapeze ? (totalTrapezePlf > 0 ? Math.round(totalTrapezePlf) : null) : null,
      trapezeRows: isTrapeze ? trapezeRows : [],
      structure,
    })
  }

  return (
    <form className="questionnaire" onSubmit={handleSubmit}>
      <div className="q-header">
        <h2>Step 1 — System Information</h2>
        <p>Answer the questions below to generate your seismic bracing schedule.</p>
      </div>

      {/* Row 1: Service + Material */}
      <div className="q-grid two-col">
        <div className="q-field">
          <label>Service Type</label>
          <select value={serviceType} onChange={e => setServiceType(e.target.value)}>
            {SERVICE_TYPES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>
        <div className="q-field">
          <label>Pipe / Conduit Material</label>
          <select value={material} onChange={e => setMaterial(e.target.value)}>
            {materials.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
          </select>
        </div>
      </div>

      {/* Row 2: Size only — hanger spacing auto-set from code */}
      <div className="q-grid two-col">
        <div className="q-field">
          <label>
            {isDuct ? 'Duct Width / Diameter' : isConduit ? 'Conduit Trade Size' : 'Pipe Nominal Size'}
            {' (inches)'}
          </label>
          {sizes ? (
            <select value={pipeSize} onChange={e => setPipeSize(e.target.value)}>
              {sizes.map(s => <option key={s} value={s}>{s}"</option>)}
            </select>
          ) : (
            <input
              type="number" min="1" step="1"
              value={pipeSize} onChange={e => setPipeSize(e.target.value)}
              placeholder="Enter size in inches"
            />
          )}
        </div>
        <div className="q-field">
          <label>Hanger Spacing</label>
          <div className="code-auto-badge">
            Auto — set per applicable code
          </div>
          <span className="field-hint">
            CPC 2022 (plumbing) · NFPA 13 (fire) · CMC / SMACNA (duct) · CEC 2023 (electrical)
          </span>
        </div>
      </div>

      {/* Row 3: Installation + Brace Type */}
      <div className="q-grid two-col">
        <div className="q-field">
          <label>Installation Method</label>
          {INSTALL_METHODS.map(opt => (
            <label key={opt.value} className="radio-label">
              <input
                type="radio" name="installMethod" value={opt.value}
                checked={installMethod === opt.value}
                onChange={() => setInstallMethod(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
        <div className="q-field">
          <label>Brace Type</label>
          {BRACE_TYPES.map(opt => (
            <label
              key={opt.value}
              className={`radio-label ${opt.value === 'cableX' && !isTrapeze ? 'disabled' : ''}`}
            >
              <input
                type="radio" name="braceType" value={opt.value}
                checked={braceType === opt.value}
                onChange={() => setBraceType(opt.value)}
                disabled={opt.value === 'cableX' && !isTrapeze}
              />
              {opt.label}
              {opt.value === 'cableX' && !isTrapeze && <span className="badge-sm"> (Trapeze only)</span>}
            </label>
          ))}
        </div>
      </div>

      {/* Row 4: Ip + Structure */}
      <div className="q-grid two-col">
        <div className="q-field">
          <label>Importance Factor (Ip) — CBC 2025 / ASCE 7-22</label>
          {IP_OPTIONS.map(opt => (
            <label key={opt.value} className="radio-label">
              <input
                type="radio" name="ip" value={opt.value}
                checked={Number(ip) === opt.value}
                onChange={() => setIp(opt.value)}
              />
              {opt.label}
              <span className="field-hint" style={{ display: 'block', marginLeft: '1.4rem' }}>
                {opt.desc}
              </span>
            </label>
          ))}
        </div>
        <div className="q-field">
          <label>Structure / Substrate</label>
          <select value={structure} onChange={e => setStructure(e.target.value)}>
            <option value="concrete">Cast-in-place Concrete</option>
            <option value="metalDeck">Metal Decking (unfilled)</option>
            <option value="steel">Structural Steel</option>
            <option value="wood">Wood</option>
            <option value="concreteSlab">Concrete over Metal Deck</option>
          </select>
        </div>
      </div>

      {/* Row 5: Spacing Option + Trapeze Total */}
      <div className="q-grid two-col">
        <div className="q-field">
          <label>Brace Spacing Option</label>
          {SPACING_OPTIONS.map(opt => (
            <label key={opt.value} className="radio-label">
              <input
                type="radio" name="spacingOption" value={opt.value}
                checked={spacingOption === opt.value}
                onChange={() => setSpacingOption(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
        {isTrapeze && (
          <div className="q-field">
            <label>Computed Trapeze Load</label>
            <div className={`trapeze-total-display${totalTrapezePlf > 0 ? ' has-value' : ''}`}>
              <span className="trapeze-total-value">{totalTrapezePlf.toFixed(1)}</span>
              <span className="trapeze-total-unit"> lbs/ft total</span>
            </div>
            <span className="field-hint">Auto-calculated from pipe schedule below</span>
          </div>
        )}
      </div>

      {/* Trapeze Multi-Pipe Builder */}
      {isTrapeze && (
        <div className="q-trapeze-builder">
          <div className="trapeze-builder-header">
            <label>Trapeze Pipe Schedule</label>
            <span className="field-hint">
              Add every pipe, conduit, or duct on this trapeze. Weights are auto-filled where available; enter manually for duct/conduit.
            </span>
          </div>

          <div className="trapeze-col-labels">
            <span className="tcl-num">#</span>
            <span className="tcl-mat">Material</span>
            <span className="tcl-size">Size</span>
            <span className="tcl-qty">Qty</span>
            <span className="tcl-plf">Weight contribution</span>
          </div>

          {trapezeRows.map((row, idx) => {
            const autoW  = PIPE_WEIGHTS[row.material]?.[Number(row.pipeSize)]
            const sizes  = PIPE_SIZES[row.material]
            const rowPlf = autoW != null
              ? autoW * (parseInt(row.qty) || 1)
              : (parseFloat(row.manualPlf) || 0) * (parseInt(row.qty) || 1)

            return (
              <div key={row.id} className="trapeze-row">
                <span className="trapeze-row-num">{idx + 1}</span>

                {/* Material */}
                <select
                  className="trapeze-select trapeze-select-mat"
                  value={row.material}
                  onChange={e => updateTrapezeRow(row.id, 'material', e.target.value)}
                >
                  {TRAPEZE_MATERIALS.map(m => (
                    <option key={m.value} value={m.value}>{m.label}</option>
                  ))}
                </select>

                {/* Size */}
                {sizes ? (
                  <select
                    className="trapeze-select trapeze-select-size"
                    value={row.pipeSize}
                    onChange={e => updateTrapezeRow(row.id, 'pipeSize', e.target.value)}
                  >
                    {sizes.map(s => <option key={s} value={s}>{s}"</option>)}
                  </select>
                ) : (
                  <input
                    type="number" min="1" step="1"
                    className="trapeze-input trapeze-input-size"
                    value={row.pipeSize}
                    onChange={e => updateTrapezeRow(row.id, 'pipeSize', e.target.value)}
                    placeholder='in"'
                  />
                )}

                {/* Qty */}
                <input
                  type="number" min="1" step="1"
                  className="trapeze-input trapeze-input-qty"
                  value={row.qty}
                  onChange={e => updateTrapezeRow(row.id, 'qty', e.target.value)}
                />

                {/* PLF auto display OR manual input */}
                {autoW != null ? (
                  <div className="trapeze-plf-cell trapeze-plf-auto">
                    <span className="trapeze-plf-unit-val">{autoW}</span>
                    <span className="trapeze-plf-x"> × {row.qty} = </span>
                    <strong className="trapeze-plf-total">{rowPlf.toFixed(1)} lbs/ft</strong>
                  </div>
                ) : (
                  <div className="trapeze-plf-cell trapeze-plf-manual">
                    <input
                      type="number" min="0" step="0.1"
                      className="trapeze-input trapeze-input-plf"
                      value={row.manualPlf}
                      onChange={e => updateTrapezeRow(row.id, 'manualPlf', e.target.value)}
                      placeholder="lbs/ft ea"
                    />
                    {row.manualPlf > 0 && (
                      <strong className="trapeze-plf-total"> = {rowPlf.toFixed(1)} lbs/ft</strong>
                    )}
                  </div>
                )}

                {/* Remove */}
                {trapezeRows.length > 1 && (
                  <button
                    type="button"
                    className="trapeze-remove-btn"
                    onClick={() => removeTrapezeRow(row.id)}
                    title="Remove this row"
                  >×</button>
                )}
              </div>
            )
          })}

          <button type="button" className="trapeze-add-btn" onClick={addTrapezeRow}>
            + Add Pipe / Conduit / Duct
          </button>
        </div>
      )}

      <div className="q-actions">
        <button type="submit" className="btn-primary">
          Generate Bracing Schedule →
        </button>
      </div>
    </form>
  )
}
