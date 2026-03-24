export default function Header() {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="header-logo">
          <span className="logo-icon">⚡</span>
          <div>
            <h1 className="header-title">AGC Seismic Pro</h1>
            <p className="header-sub">Seismic Bracing Design Tool · CBC 2025 · ASCE 7-22</p>
          </div>
        </div>
        <div className="header-badge">
          <span className="badge">CBC 2025</span>
          <span className="badge">ASCE 7-22</span>
        </div>
      </div>
    </header>
  )
}
