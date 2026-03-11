import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const buildLabel = import.meta.env.VITE_BUILD_LABEL || 'Release 1 - CI/CD Verification'

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Deployment Monitor</p>
        <h1>CI/CD Pipeline Verification Screen</h1>
        <p className="subtitle">
          If you can see this updated design on your hosted URL, your latest pipeline run deployed successfully.
        </p>
      </section>

      <section className="status-grid">
        <article className="status-card">
          <h2>Build Label</h2>
          <p>{buildLabel}</p>
        </article>
        <article className="status-card">
          <h2>Environment</h2>
          <p>{import.meta.env.MODE}</p>
        </article>
        <article className="status-card">
          <h2>Verification Clicks</h2>
          <button className="verify-btn" onClick={() => setCount((value) => value + 1)}>
            count is {count}
          </button>
        </article>
      </section>

      <section className="checklist">
        <h2>Post-Deploy Checks</h2>
        <ul>
          <li>Open your deployed CloudFront or S3 website URL.</li>
          <li>Confirm this heading and layout are visible.</li>
          <li>Click the counter to confirm the app is interactive.</li>
        </ul>
      </section>
      <footer className="footer-note">
        Last updated for end-to-end pipeline validation.
      </footer>
    </main>
  )
}

export default App
