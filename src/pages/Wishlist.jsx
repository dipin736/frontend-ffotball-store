import { Link } from 'react-router-dom'

function Wishlist({ wishlist, onRemove, onAddToCart }) {
  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="wishlist-empty">
          <h1>Wishlist</h1>
          <p>Your wishlist is empty.</p>
          <Link to="/" className="btn">Continue Shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="wishlist-page">
      <div className="section">
        <div className="section-header">
          <h1>Wishlist</h1>
          <p>{wishlist.length} item(s)</p>
        </div>
        
        <div className="wishlist-grid">
          {wishlist.map(product => (
            <div key={product.id} className="wishlist-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <button 
                  className="wishlist-remove"
                  onClick={() => onRemove(product.id)}
                  aria-label="Remove from wishlist"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                {product.originalPrice && (
                  <span className="sale-badge">
                    Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <div className="product-price">
                  {product.originalPrice ? (
                    <>
                      <span className="price-sale">Rs. {product.price.toLocaleString()}</span>
                      <span className="price-regular">Rs. {product.originalPrice.toLocaleString()}</span>
                    </>
                  ) : (
                    <span className="price-current">Rs. {product.price.toLocaleString()}</span>
                  )}
                </div>
                <button 
                  className="wishlist-add-btn"
                  onClick={() => onAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Wishlist
