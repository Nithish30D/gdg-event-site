import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const EventDetails = () => {
  const events = [
    {
      id: 1,
      title: "Android Development Workshop",
      date: "December 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Info Institute of Engineering, Main Auditorium",
      capacity: "100 participants",
      description: "Learn Android development from scratch with hands-on coding sessions and expert guidance."
    },
    {
      id: 2,
      title: "Cloud Computing Seminar",
      date: "December 22, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Info Institute of Engineering, Tech Hub",
      capacity: "150 participants",
      description: "Explore Google Cloud Platform services and learn how to deploy scalable applications."
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      date: "November 30, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Info Institute of Engineering, Computer Lab",
      capacity: "80 participants",
      description: "Intensive bootcamp covering modern web development with React, Node.js, and Firebase."
    }
  ];

  return (
    <section className="event-details">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', color: '#333' }}>
          Upcoming Events
        </h2>
        <div className="event-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <h3>
                <Calendar size={24} />
                {event.title}
              </h3>
              <p style={{ marginBottom: '1rem' }}>{event.description}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#666' }}>
                <Calendar size={16} style={{ marginRight: '0.5rem' }} />
                <span>{event.date}</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#666' }}>
                <Clock size={16} style={{ marginRight: '0.5rem' }} />
                <span>{event.time}</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#666' }}>
                <MapPin size={16} style={{ marginRight: '0.5rem' }} />
                <span>{event.location}</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#666' }}>
                <Users size={16} style={{ marginRight: '0.5rem' }} />
                <span>{event.capacity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;