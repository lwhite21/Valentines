import { useState, useEffect } from 'react'
import './ValentineQuestion.css'

export default function ValentineQuestion({ onYes }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [noButtonPos, setNoButtonPos] = useState({ x: 'auto', y: 'auto' })

  const text = 'Will you be my Valentine?'
  const words = text.split(' ')

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const noButton = document.getElementById('no-button')
    if (!noButton) return

    const noRect = noButton.getBoundingClientRect()
    const noCenter = {
      x: noRect.left + noRect.width / 2,
      y: noRect.top + noRect.height / 2,
    }

    const distance = Math.sqrt(
      Math.pow(mousePos.x - noCenter.x, 2) + Math.pow(mousePos.y - noCenter.y, 2)
    )

    if (distance < 150) {
      const angle = Math.atan2(noCenter.y - mousePos.y, noCenter.x - mousePos.x)
      const newX = noCenter.x + Math.cos(angle) * 100
      const newY = noCenter.y + Math.sin(angle) * 100

      // Keep button within window bounds
      const boundedX = Math.max(0, Math.min(newX - noRect.width / 2, window.innerWidth - noRect.width))
      const boundedY = Math.max(0, Math.min(newY - noRect.height / 2, window.innerHeight - noRect.height))

      setNoButtonPos({
        x: boundedX,
        y: boundedY,
      })
    }
  }, [mousePos])

  return (
    <div className="valentine-container">
      <div className="text-container">
        {words.map((word, index) => (
          <span key={index} className="word" style={{ animationDelay: `${index * 0.2}s` }}>
            {word}
          </span>
        ))}
      </div>

      <div className="button-container">
        <button className="yes-button" onClick={onYes}>
          Yes ❤️
        </button>
        <button
          id="no-button"
          className="no-button"
          style={{
            position: noButtonPos.x !== 'auto' ? 'fixed' : 'static',
            left: noButtonPos.x !== 'auto' ? `${noButtonPos.x}px` : 'auto',
            top: noButtonPos.y !== 'auto' ? `${noButtonPos.y}px` : 'auto',
            cursor: 'default',
          }}
        >
          No
        </button>
      </div>
    </div>
  )
}
