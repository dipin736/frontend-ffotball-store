import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <div className="newsletter-section">
      <h3>Stay in the loop with our weekly newsletter</h3>
      {subscribed ? (
        <p style={{ color: '#cdff65' }}>Thanks for subscribing!</p>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  )
}

export default Newsletter
