import { Link } from 'react-router-dom'

function Cart({ cart, onRemove }) {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal >= 999 ? 0 : 99

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <h1>Your Cart</h1>
          <p>Your cart is currently empty.</p>
          <Link to="/" className="btn">Continue Shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-items-section">
          <h1>Your Cart</h1>
          <div className="cart-list">
            {cart.map(item => (
              <div key={item.id} className="cart-list-item">
                <div className="cart-list-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cart-list-info">
                  <h3>{item.title}</h3>
                  <p className="cart-list-price">Rs. {item.price.toLocaleString()}</p>
                  <div className="cart-list-actions">
                    <select className="cart-qty-select">
                      <option value={item.quantity}>{item.quantity}</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <button onClick={() => onRemove(item.id)}>Remove</button>
                  </div>
                </div>
                <p className="cart-list-subtotal">Rs. {(item.price * item.quantity).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-summary-section">
          <div className="cart-summary">
            <h2>Summary</h2>
            
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="cart-summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `Rs. ${shipping}`}</span>
            </div>
            
            <div className="cart-summary-note">
              <input type="text" placeholder="Add a note to your order" />
            </div>
            
            <div className="cart-summary-total">
              <span>Total</span>
              <span>Rs. {(subtotal + shipping).toLocaleString()}</span>
            </div>
            
            <p className="cart-tax-note">Taxes included and shipping calculated at checkout.</p>
            
            {shipping > 0 && (
              <p className="free-shipping-notice">
                Add Rs. {(999 - subtotal).toLocaleString()} more for free shipping!
              </p>
            )}
            
            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
            
            <Link to="/" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
