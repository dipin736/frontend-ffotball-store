function CollectionGrid() {
  const collections = [
    { 
      name: 'Retro Jerseys', 
      count: '151',
      image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=400&fit=crop'
    },
    { 
      name: 'Anthem Jackets', 
      count: '24',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=400&fit=crop'
    },
    { 
      name: 'Jerseys With Shorts', 
      count: '33',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop'
    },
    { 
      name: 'Accessories', 
      count: '39',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=400&fit=crop'
    },
    { 
      name: '2025-26 Season Kits', 
      count: '67',
      image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400&h=400&fit=crop'
    }
  ]

  return (
    <section className="section">
      <div className="collection-grid">
        {collections.map((collection, index) => (
          <a key={index} href="#" className="collection-card">
            <img src={collection.image} alt={collection.name} />
            <div className="collection-card-content">
              <h3>{collection.name}</h3>
              <span>{collection.count}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default CollectionGrid
