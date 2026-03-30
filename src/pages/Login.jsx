import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [isRegister, setIsRegister] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    if (isRegister) {
      if (!formData.firstName) newErrors.firstName = 'First name is required'
      if (!formData.lastName) newErrors.lastName = 'Last name is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      alert(isRegister ? 'Account created successfully! (Demo)' : 'Login successful! (Demo)')
      navigate('/')
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100&h=100&fit=crop" alt="Logo" />
          <h1>{isRegister ? 'Create Account' : 'Welcome back'}</h1>
          <p>{isRegister ? 'Join our community today' : 'Please enter your details to sign in'}</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {isRegister && (
            <div className="form-row">
              <div className="form-group">
                <input
                   type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <input
                   type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
              </div>
            </div>
          )}

          <div className="form-group">
            <input
               type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group password-group">
            <input
               type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button 
              type="button" 
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
              )}
            </button>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          {!isRegister && (
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
          )}

          <button type="submit" className="login-submit">
            {isRegister ? 'Create Account' : 'Sign In'}
          </button>

          {isRegister && (
            <p className="terms-text">
              By creating an account, you agree to our{' '}
              <a href="#">Terms</a> and <a href="#">Privacy</a>
            </p>
          )}
        </form>

        <div className="login-divider">
          <span>or continue with</span>
        </div>

        <div className="social-login">
          <button className="social-btn google">
            <svg width="18" height="18" viewBox="0 0 24 24" alt="Google"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/></svg>
            Google
          </button>
          <button className="social-btn apple">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.057 10.78c.045 1.825 1.591 2.43 1.611 2.441-.015.051-.255.877-.831 1.719-.495.726-1.012 1.448-1.82 1.464-.795.015-1.012-.472-1.92-.472-.924 0-1.163.457-1.92.487-.765.03-1.365-.675-1.868-1.395-1.035-1.478-1.823-4.17-1.485-8.23.165-2.025 1.44-3.083 2.618-3.105.885-.015 1.725.592 2.265.592.532 0 1.545-.735 2.595-.622.443.015 1.688.173 2.49 1.343l-.113.068c-.908.525-1.5 1.508-1.485 2.61Zm-2.67-6.098c.555-.667.93-1.605.825-2.542-.795.03-1.763.532-2.333 1.185-.51.585-.96 1.545-.84 2.46.885.068 1.793-.435 2.348-1.103Z"/></svg>
            Apple
          </button>
        </div>

        <div className="login-switch">
          {isRegister ? (
            <p>
              Already have an account?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsRegister(false); }}>Sign in</a>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsRegister(true); }}>Create one</a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
