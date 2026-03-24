import { useState } from 'react'
import Questionnaire from './components/Questionnaire'
import ResultsTable from './components/ResultsTable'
import Header from './components/Header'
import './App.css'

function App() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(null)

  function handleSubmit(data) {
    setFormData(data)
    setStep(2)
  }

  function handleBack() {
    setStep(1)
  }

  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        {step === 1 && <Questionnaire onSubmit={handleSubmit} initialData={formData} />}
        {step === 2 && <ResultsTable formData={formData} onBack={handleBack} />}
      </main>
      <footer className="app-footer">
        <p>
          <strong>AGC Seismic Pro</strong> &nbsp;|&nbsp; Seismic Bracing Design Tool &nbsp;|&nbsp; CBC 2025 &nbsp;|&nbsp; ASCE 7-22
        </p>
      </footer>
    </div>
  )
}

export default App
