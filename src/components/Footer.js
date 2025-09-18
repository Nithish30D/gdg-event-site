import React from 'react';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <MapPin size={16} style={{ marginRight: '0.5rem' }} />
              <span>Info Institute of Engineering</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <Mail size={16} style={{ marginRight: '0.5rem' }} />
              <span>gdg@infoinstituteeng.edu</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <Phone size={16} style={{ marginRight: '0.5rem' }} />
              <span>+91 98765 43210</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul style={{ listStyle: 'none' }}>
              <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
              <li><a href="/events" style={{ color: 'white', textDecoration: 'none' }}>Events</a></li>
              <li><a href="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>About GDG</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              Google Developer Groups are community-driven organizations that foster learning, 
              sharing, and networking among developers interested in Google technologies.
            </p>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #555', paddingTop: '1rem', textAlign: 'center' }}>
          <p>&copy; 2024 GDG Info Institute of Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;