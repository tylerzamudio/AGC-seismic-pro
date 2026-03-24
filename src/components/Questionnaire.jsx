import { useState, useEffect } from 'react'

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

const FP_OPTIONS = [
  { value: 0.25, label: '0.25g — Low seismic / basement' },
  { value: 0.5, label: '0.50g — Moderate seismic' },
  { value: 1.0, label: '1.00g — High seismic' },
  { value: 1.5, label: '1.50g — Very high seismic' },
  { value: 2.0, label: '2.00g — Extreme seismic' },
  { value: 2.5, label: '2.50g — Maximum allowed' },
]

const SPACING_OPTIONS = [
  { value: 1, label: 'Option 1 — Maximum transverse spacing (most common)' },
  { value: 3, label: 'Option 3 — Reduced transverse spacing (tighter brace)' },
]

export default function Questionnaire({ onSubmit, initialData }) {
  const [serviceType, setServiceType] = useState(initialData?.serviceType || 'pipe')
  const [material, setMaterial] = useState(initialData?.material || 'steel')
  const [pipeSize, setPipeSize] = useState(initialData?.pipeSize || 4)
  const [installMethod, setInstallMethod] = useState(initialData?.installMethod || 'individual')
  const [braceType, setBraceType] = useState(initialData?.braceType || 'solid')
  const [fp, setFp] = useState(initialData?.fp || 0.5)
  const [spacingOption, setSpacingOption] = useState(initialData?.spacingOption || 1)
  const [hangerSpacing, setHangerSpacing] = useState(initialData?.hangerSpacing || 10)
  const [totalWeight, setTotalWeight] = useState(initialData?.totalWeight || '')
  const [structure, setStructure] = useState(initialData?.structure || 'concrete')

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
    onSubmit({
      serviceType, material, pipeSize: Number(pipeSize), installMethod,
      braceType, fp: Number(fp), spacingOption: Number(spacingOption),
      hangerSpacing: Number(hangerSpacing),
      totalWeight: totalWeight ? Number(totalWeight) : null,
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

      {/* Row 2: Size + Hanger Spacing */}
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
          <label>Hanger Spacing (ft)</label>
          <input
            type="number" min="1" max="20" step="0.5"
            value={hangerSpacing}
            onChange={e => setHangerSpacing(e.target.value)}
          />
          <span className="field-hint">Max 10–20 ft depending on pipe type</span>
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

      {/* Row 4: Fp + Structure */}
      <div className="q-grid two-col">
        <div className="q-field">
          <label>Seismic Lateral Force (Fp)</label>
          <select value={fp} onChange={e => setFp(e.target.value)}>
            {FP_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <span className="field-hint">
            From structural drawings (SDS × Ip × Rp factors). Max design limit = 2.5g
          </span>
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

      {/* Row 5: Table Option + Trapeze Weight */}
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
          <div className="q-field highlight-field">
            <label>Total Trapeze Load (lbs/ft) <span className="required">*</span></label>
            <input
              type="number" min="1" step="1"
              value={totalWeight}
              onChange={e => setTotalWeight(e.target.value)}
              placeholder="e.g. 80 (sum of all pipes on trapeze)"
              required={isTrapeze}
            />
            <span className="field-hint">
              Sum of all pipe weights + fluid on the trapeze (use spreadsheets to calculate)
            </span>
          </div>
        )}
      </div>

      <div className="q-actions">
        <button type="submit" className="btn-primary">
          Generate Bracing Schedule →
        </button>
      </div>
    </form>
  )
}
