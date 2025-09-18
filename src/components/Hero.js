import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Google Developer Group</h1>
        <p>
          Join us for exciting tech events, workshops, and networking opportunities 
          at Info Institute of Engineering. Connect with fellow developers and learn 
          the latest in Google technologies.
        </p>
        <Link to="/register" className="cta-button">
          Register for Events
        </Link>
      </div>
    </section>
  );
};

export default Hero;