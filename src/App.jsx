import { useEffect, useState } from 'react'
import { api } from './api/client'
import './App.css'

function App() {
  const [status, setStatus] = useState('Connecting...')
  const [error, setError] = useState(null)

  useEffect(() => {
    api('/api/health')
      .then((data) => {
        setStatus(data.message)
      })
      .catch((err) => {
        setError(err.message)
        setStatus('Backend connection failed')
      })
  }, [])

  return (
    <main>
      <h1>ERP</h1>

      <p>Backend: {status}</p>

      {error && (
        <p style={{ color: 'red' }}>
          {error}
        </p>
      )}
    </main>
  )
}

export default App