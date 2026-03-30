import { Link } from 'react-router-dom'

function Checkout({ cart }) {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal >= 999 ? 0 : 99
  const total = subtotal + shipping

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    orderNote: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Order placed successfully! (Demo)')
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">
          <h1>Checkout</h1>
          <p>Your cart is empty.</p>
          <Link to="/" className="btn">Continue Shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-form-section">
          <h1>Checkout</h1>
          
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-section">
              <h3>Contact</h3>
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-section">
              <h3>Shipping Address</h3>
              <div className="form-row">
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="First name" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Last name" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required 
                />
              </div>
              <input 
                type="text" 
                name="address"
                placeholder="Address" 
                value={formData.address}
                onChange={handleChange}
                required 
              />
              <div className="form-row">
                <input 
                  type="text" 
                  name="city"
                  placeholder="City" 
                  value={formData.city}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="text" 
                  name="state"
                  placeholder="State" 
                  value={formData.state}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-row">
                <input 
                  type="text" 
                  name="pincode"
                  placeholder="PIN code" 
                  value={formData.pincode}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Order Note</h3>
              <textarea 
                name="orderNote"
                placeholder="Add a note to your order" 
                value={formData.orderNote}
                onChange={handleChange}
                rows="3"
              />
            </div>

            <button type="submit" className="checkout-submit-btn">
              Complete Order - Rs. {total.toLocaleString()}
            </button>
          </form>
        </div>

        <div className="checkout-summary-section">
          <div className="checkout-summary">
            <h3>Order Summary</h3>
            <div className="checkout-items">
              {cart.map(item => (
                <div key={item.id} className="checkout-item">
                  <div className="checkout-item-image">
                    <img src={item.image} alt={item.title} />
                    <span className="checkout-item-qty">{item.quantity}</span>
                  </div>
                  <div className="checkout-item-info">
                    <p className="checkout-item-title">{item.title}</p>
                    {item.size && <p className="checkout-item-size">Size: {item.size}</p>}
                  </div>
                  <p className="checkout-item-price">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>

            <div className="checkout-totals">
              <div className="checkout-total-row">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="checkout-total-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `Rs. ${shipping}`}</span>
              </div>
              <div className="checkout-total-row">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="checkout-total-row checkout-total-final">
                <span>Total</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
            </div>

            {shipping > 0 && (
              <p className="free-shipping-notice">
                Add Rs. {(999 - subtotal).toLocaleString()} more for free shipping!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'

export default Checkout
