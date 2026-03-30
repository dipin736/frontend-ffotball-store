function CollectionBanners() {
  return (
    <div className="collection-banners">
      <div className="collection-banner">
        <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=450&fit=crop" alt="Barcelona x Travis Scott" />
        <div className="collection-banner-content">
          <h2>Barcelona x Travis Scott</h2>
          <p>Where the football legacy meets cactus jack's iconic street wear edge</p>
          <a href="#" className="btn">Shop Now</a>
        </div>
      </div>
      <div className="collection-banner">
        <img src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=450&fit=crop" alt="Wear Your Passion" />
        <div className="collection-banner-content">
          <h2>Wear Your Passion. Own the Game.</h2>
          <p>Shop by teams that rule the game.</p>
          <a href="#" className="btn">Explore All</a>
        </div>
      </div>
    </div>
  )
}

export default CollectionBanners
