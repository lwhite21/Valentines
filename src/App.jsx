import { useState } from 'react'
import './App.css'
import ValentineQuestion from './components/ValentineQuestion'
import SuccessScreen from './components/SuccessScreen'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleYes = () => {
    setShowSuccess(true)
  }

  return (
    <div className="app">
      {!showSuccess ? (
        <ValentineQuestion onYes={handleYes} />
      ) : (
        <SuccessScreen />
      )}
    </div>
  )
}

export default App
