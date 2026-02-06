import { useState } from 'react'
import './SuccessScreen.css'

// Import user assets from src/assets (using JPGs you converted)
import img1 from '../assets/Image1.jpg'
import img2 from '../assets/Image2.jpg'
import videoSrc from '../assets/Video.mp4'

export default function SuccessScreen() {
  // Use the two images you added and the video as the third item.
  // The middle item is the second image (an image), per your request.
  // Put the video in the middle frame (id 2).
  const [pictures] = useState([
    { id: 1, src: img1, alt: 'Us 1', type: 'image' },
    { id: 2, src: videoSrc, alt: 'Memory video', type: 'video' },
    { id: 3, src: img2, alt: 'Us 2', type: 'image' },
  ])

  return (
    <div className="success-container">
      <div className="success-content">
        <h1 className="success-title">You said YES! 🎉❤️</h1>
        <p className="success-message">I love you so much!</p>

        <div className="pictures-gallery">
          {pictures.map((picture) => (
            <div key={picture.id} className="picture-frame">
              {picture.type === 'video' ? (
                <video
                  src={picture.src}
                  className="picture-media"
                  playsInline
                  muted
                  autoPlay
                  loop
                />
              ) : (
                <img src={picture.src} alt={picture.alt} className="picture-media" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
