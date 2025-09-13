import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Football Marketplace</h1>
          <p>Your ultimate destination for football trading, equipment, and community</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚽</div>
              <h3>Equipment Trading</h3>
              <p>Buy and sell football equipment with other players and teams</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Player Community</h3>
              <p>Connect with players, coaches, and football enthusiasts worldwide</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Team Management</h3>
              <p>Organize your team, schedule matches, and track performance</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat-item">
              <h3>5,000+</h3>
              <p>Items Traded</p>
            </div>
            <div className="stat-item">
              <h3>1,000+</h3>
              <p>Teams Registered</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
