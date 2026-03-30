function TeamsSection() {
  const teams = [
    { name: 'Real Madrid', count: '67', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300&h=200&fit=crop' },
    { name: 'AC Milan', count: '27', image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=300&h=200&fit=crop' },
    { name: 'Barcelona', count: '3', image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=300&h=200&fit=crop' },
    { name: 'Manchester United', count: '45', image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=300&h=200&fit=crop' },
  ]

  return (
    <div className="teams-section">
      <div className="teams-header">
        <h2>Wear Your Passion. Own the Game.</h2>
        <p>Fresh drops from the 2025-26 season, gear up like it's match day every day!</p>
      </div>
      <div className="teams-grid">
        {teams.map((team, index) => (
          <a key={index} href="#" className="team-card">
            <img src={team.image} alt={team.name} />
            <span>{team.name} ({team.count})</span>
          </a>
        ))}
      </div>
      <a href="#" className="explore-btn">Explore All</a>
    </div>
  )
}

export default TeamsSection
