import React from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="header">
        <div className="logo">
          <h1>RAPHAEL GYM HUB</h1>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Ready to Unlock Your Potential?</h2>
          <p>Join the Gym Hub challenge and level up your fitness. Enter the realm of ultimate gains!</p>
          {/* Add Link to navigate to the Login Page */}
          <Link to="/login">
            <button className="cta-button">Enter the Hub</button>
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Raphael Enyanyo. The legend of the gym.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
