import React from 'react';
import EventDetails from '../components/EventDetails';

const Events = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <EventDetails />
      
      {/* Additional Event Information */}
      <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: '#333' }}>
            Why Attend GDG Events?
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '15px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#4285f4', marginBottom: '1rem' }}>Learn from Experts</h3>
              <p>Get insights from industry professionals and Google Developer Experts who share their knowledge and experience.</p>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '15px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#34a853', marginBottom: '1rem' }}>Hands-on Experience</h3>
              <p>Participate in workshops and coding sessions that give you practical experience with Google technologies.</p>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '15px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#fbbc04', marginBottom: '1rem' }}>Network & Connect</h3>
              <p>Meet like-minded developers, build connections, and expand your professional network within the tech community.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;