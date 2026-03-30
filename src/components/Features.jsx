function Features() {
  const features = [
    { icon: '🚚', title: 'Free Shipping', description: 'On orders over ₹999' },
    { icon: '↩️', title: 'Easy Returns', description: '30-day return policy' },
    { icon: '🔒', title: 'Secure Payment', description: '100% secure checkout' },
    { icon: '💬', title: '24/7 Support', description: 'Dedicated customer care' }
  ]

  return (
    <section className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Features
