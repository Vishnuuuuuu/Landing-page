// src/LandingPage.js
import React from 'react';

const LandingPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Our Anime Newsletter</h1>
      <p>Subscribe to stay updated with the latest anime news!</p>
      
      <iframe
        src="https://embeds.beehiiv.com/a4e45060-1016-4ca3-b2c7-a395782eabdf?slim=true"
        data-test-id="beehiiv-embed"
        height="52"
        frameBorder="0"
        scrolling="no"
        style={{ margin: '0', borderRadius: '0px', backgroundColor: 'transparent' }}
        title="Newsletter Signup"
      ></iframe>
    </div>
  );
};

export default LandingPage;
