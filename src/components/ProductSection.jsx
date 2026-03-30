import { Link } from 'react-router-dom'

function ProductSection({ title, products, onAddToCart, onAddToWishlist, wishlist }) {
  return (
    <section className="section">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="product-grid">
        {products.map(product => {
          const savePercent = product.originalPrice 
            ? Math.round((1 - product.price / product.originalPrice) * 100)
            : 0
          
          const isInWishlist = wishlist?.some(item => item.id === product.id)
          
          return (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <div className="product-badges">
                  {product.soldOut && <span className="sold-out-badge">Sold Out</span>}
                  {product.originalPrice && !product.soldOut && (
                    <span className="sale-badge">Save {savePercent}%</span>
                  )}
                </div>
                <button 
                  className={`wishlist-btn ${isInWishlist ? 'active' : ''}`}
                  onClick={() => onAddToWishlist?.(product)}
                  aria-label="Add to wishlist"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <button className="quick-add" onClick={() => onAddToCart(product)}>
                  {product.soldOut ? 'Notify Me' : 'Quick Add'}
                </button>
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
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProductSection
