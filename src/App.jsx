import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Slideshow from './components/Slideshow'
import CollectionGrid from './components/CollectionGrid'
import CollectionBanners from './components/CollectionBanners'
import SaleBanner from './components/SaleBanner'
import ProductSection from './components/ProductSection'
import BrandStory from './components/BrandStory'
import TeamsSection from './components/TeamsSection'
import StatsSection from './components/StatsSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CartSidebar from './components/CartSidebar'
import Checkout from './pages/Checkout'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import Cart from './pages/Cart'

const products = [
  { id: 1, title: "Morocco 2025 Home - Stadium Kit", price: 1049, image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=400&fit=crop" },
  { id: 2, title: "Algeria 2026 Home - Stadium Kit", price: 1049, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop" },
  { id: 3, title: "FC Barcelona Fourth 2025-26", price: 699, originalPrice: 1039, soldOut: false, image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=400&fit=crop" },
  { id: 4, title: "Real Madrid Icon - Stadium Kit", price: 499, originalPrice: 1039, image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=400&fit=crop" },
  { id: 5, title: "Arsenal Icon - Stadium Kit", price: 499, originalPrice: 1039, image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400&h=400&fit=crop" },
  { id: 6, title: "Liverpool Icon - Stadium Kit", price: 499, originalPrice: 1039, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop" },
  { id: 7, title: "Man United Icon - Stadium Kit", price: 499, originalPrice: 1039, image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=400&fit=crop" },
  { id: 8, title: "Man City Year of Horse", price: 1039, image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=400&fit=crop" },
]

function Home({ onAddToCart, onAddToWishlist, wishlist }) {
  return (
    <>
      <Slideshow />
      <CollectionGrid />
      <CollectionBanners />
      <SaleBanner />
      <ProductSection title="Best Sellers" products={products} onAddToCart={onAddToCart} onAddToWishlist={onAddToWishlist} wishlist={wishlist} />
      <BrandStory />
      <TeamsSection />
      <StatsSection />
      <Newsletter />
    </>
  )
}

function App() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showCookie, setShowCookie] = useState(true)

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist')
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }
  }, [])

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      const newWishlist = [...wishlist, product]
      setWishlist(newWishlist)
      localStorage.setItem('wishlist', JSON.stringify(newWishlist))
    }
  }

  const removeFromWishlist = (productId) => {
    const newWishlist = wishlist.filter(item => item.id !== productId)
    setWishlist(newWishlist)
    localStorage.setItem('wishlist', JSON.stringify(newWishlist))
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <BrowserRouter basename="/frontend-ffotball-store">
      {showCookie && (
        <div className="cookie-banner">
          <span>We use cookies for better user experience and analytics. By using our site, you agree to our policies.</span>
          <div className="cookie-banner-actions">
            <button className="cookie-accept" onClick={() => setShowCookie(false)}>Accept</button>
            <button className="cookie-decline" onClick={() => setShowCookie(false)}>Decline</button>
          </div>
        </div>
      )}
      
      <Header 
        cartCount={cartCount} 
        wishlistCount={wishlist.length}
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <Routes>
        <Route path="/" element={
          <Home 
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
            wishlist={wishlist}
          />
        } />
        <Route path="/checkout" element={
          <Checkout cart={cart} />
        } />
        <Route path="/wishlist" element={
          <Wishlist wishlist={wishlist} onRemove={removeFromWishlist} onAddToCart={addToCart} />
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={
          <Cart cart={cart} onRemove={removeFromCart} />
        } />
      </Routes>
      
      <Footer />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={removeFromCart}
      />
    </BrowserRouter>
  )
}

export default App
