import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({ cartCount, wishlistCount, onCartClick }) {

  const categories = [
    '2025/26 Season kits',
    'Clearance Sale',
    'Full Sets',
    'Accessories',
    'Anthem Jackets',
    'Retro Jerseys',
    'International Kits',
    'Football Boots',
    'Concept Kits',
    'Training Suits'
  ]

  return (
    <>
      <div className="announcement-bar">
        Free shipping on orders over ₹999 | Use code: FIRST20 for 20% off
      </div>
      <header className="header">
        <div className="header-top">
          <button className="mobile-menu-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          
          <Link to="/" className="logo">
            <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=150&h=40&fit=crop" alt="Logo" />
          </Link>
          
          <nav className="nav-main">
            <Link to="/">Home</Link>
            <div className="nav-dropdown">
              <a href="#">Categories</a>
              <div className="nav-dropdown-content">
                {categories.map(cat => (
                  <a key={cat} href="#">{cat}</a>
                ))}
              </div>
            </div>
            <a href="#">Contact Us</a>
            <a href="#">Initiate Exchange</a>
          </nav>
          
          <div className="header-actions">
            <div className="search-trigger">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <Link to="/login" className="header-icon-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </Link>
            <Link to="/wishlist" className="header-icon-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              {wishlistCount > 0 && <span className="cart-count">{wishlistCount}</span>}
            </Link>
            <button onClick={onCartClick} className="header-icon-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
