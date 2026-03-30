function Banner() {
  return (
    <div className="banner">
      <div className="banner-card">
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=450&fit=crop" alt="Summer Collection" />
        <div className="banner-content">
          <h3>Summer Essentials</h3>
          <p>Light fabrics, bright colors</p>
          <a href="#" className="btn">Shop Collection</a>
        </div>
      </div>
      <div className="banner-card">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop" alt="Accessories" />
        <div className="banner-content">
          <h3>Accessorize</h3>
          <p>Complete your look</p>
          <a href="#" className="btn">Shop Now</a>
        </div>
      </div>
    </div>
  )
}

export default Banner
