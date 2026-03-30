import { Link } from 'react-router-dom'

function CartSidebar({ isOpen, onClose, cart, onRemove }) {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Cart</h3>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>
        
        {cart.length === 0 ? (
          <div className="cart-items">
            <p style={{ textAlign: 'center', opacity: 0.5, padding: '2rem' }}>
              Your cart is currently empty.
            </p>
            <p style={{ textAlign: 'center', fontSize: '0.875rem', opacity: 0.7, marginTop: '1rem' }}>
              Not sure where to start? Try these collections:
            </p>
            <ul style={{ listStyle: 'none', marginTop: '1rem', fontSize: '0.875rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="#">2025-26 Season Kits</a></li>
              <li><a href="#">Clearance Sale</a></li>
            </ul>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <p className="price">Rs. {item.price.toLocaleString()} × {item.quantity}</p>
                    <button onClick={() => onRemove(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-note">
              <input type="text" placeholder="Order note" />
            </div>
            
            <div className="cart-total">
              <p className="shipping-notice">
                {subtotal >= 999 
                  ? 'You have reached free shipping!' 
                  : `Spend Rs. ${(999 - subtotal).toLocaleString()} more to reach free shipping!`}
              </p>
              <div className="cart-total-row">
                <span>Taxes</span>
                <span>Shipping calculated at checkout</span>
              </div>
              <div className="cart-total-row total">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <Link to="/checkout" className="checkout-btn" onClick={onClose}>
                Check out
              </Link>
              <Link to="/cart" className="view-cart-btn" onClick={onClose}>
                View cart
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CartSidebar
