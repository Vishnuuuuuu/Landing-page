// src/LandingPage.js
import React from 'react';
import './LandingPage.css'; // Make sure this CSS file is properly linked

// Import the image directly using Webpack's import
import animeWallpaper from './assets/anime-wallpaper.png';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="subscription-section">
        <h1>Welcome to Our Anime Newsletter</h1>
        <p>Subscribe to stay updated with the latest anime news!</p>
        <iframe
          src="https://embeds.beehiiv.com/a4e45060-1016-4ca3-b2c7-a395782eabdf?slim=true"
          data-test-id="beehiiv-embed"
          height="52"
          frameBorder="0"
          scrolling="no"
          style={{ width: '100%', border: '0', borderRadius: '8px', padding: '10px' }}
          title="Newsletter Signup"
        ></iframe>
      </div>
      <div className="image-section">
        <img src={animeWallpaper} alt="Anime Wallpaper" />
      </div>
    </div>
  );
};

export default LandingPage;
