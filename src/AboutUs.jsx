import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-card">
        <h1 className="about-us-heading">About Paradise Nursery</h1>
        <p className="about-us-description">
          Paradise Nursery is a modern online plant boutique built for indoor gardeners, apartment dwellers, and anyone who wants to bring more green into their life.
        </p>

        <div className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            We make plant ownership simple, inspiring, and stress-free. Every plant in our collection is chosen for its beauty, durability, and ability to improve home air quality.
          </p>
        </div>

        <div className="about-us-section">
          <h2>What We Believe</h2>
          <ul className="about-us-list">
            <li>Plants should be accessible to everyone, from beginners to seasoned plant parents.</li>
            <li>Every home deserves a healthier and happier atmosphere.</li>
            <li>Quality and sustainability matter in every step of our process.</li>
          </ul>
        </div>

        <div className="about-us-section">
          <h2>Why Shop With Us</h2>
          <p>
            Our team combines botanical expertise with thoughtful curation, delivering beautiful plants and helpful care guidance so you can grow with confidence.
          </p>
        </div>

        <div className="about-us-section about-us-cta">
          <p>
            Explore our collection today and discover the perfect plant for your space — from air-purifying green companions to fragrant herbs that brighten every room.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
