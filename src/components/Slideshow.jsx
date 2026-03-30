import { useState, useEffect } from 'react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop',
    title: 'INTERNATIONAL KITS',
    subtitle: 'Shop Now'
  },
  {
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&h=1080&fit=crop',
    title: 'Fifa 26 WC Match Ball',
    subtitle: 'Shop Now'
  },
  {
    image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1920&h=1080&fit=crop',
    title: '25-26 Season Kits',
    subtitle: 'Shop Now'
  },
  {
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1920&h=1080&fit=crop',
    title: 'Jerseys with Shorts',
    subtitle: 'Shop Now'
  }
]

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="slideshow">
      <div className="slideshow-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <a href="#" className="btn">{slide.subtitle}</a>
            </div>
          </div>
        ))}
      </div>
      
      <button className="slideshow-nav slideshow-prev" onClick={prevSlide}>‹</button>
      <button className="slideshow-nav slideshow-next" onClick={nextSlide}>›</button>
      
      <div className="slideshow-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slideshow-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow
