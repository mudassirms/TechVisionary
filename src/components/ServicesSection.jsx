import React from 'react';
import { motion } from 'framer-motion';
import '../global.css';

const services = [
  {
    title: 'Web Development',
    description: 'Crafting responsive, futuristic websites tailored to your vision.',
    icon: '🕸️',
  },
  {
    title: 'Graphic Design',
    description: 'Neon-inspired visuals, branding, and digital design excellence.',
    icon: '🎨',
  },
  {
    title: 'AI & Data Science',
    description: 'Building intelligent solutions and predictive models for real-world impact.',
    icon: '🤖',
  },
  {
    title: 'Custom Projects',
    description: 'Unique end-to-end solutions, powered by innovation and tech.',
    icon: '🧠',
  },
];

const ServicesSection = () => (
  <section 
    id="services" 
    className="services-section pulse-background"
    style={{
      overflow: 'hidden',
      position: 'relative',
      padding: '6rem 2rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'white',
    }}
  >
    {/* Floating Particles */}
    {[...Array(40)].map((_, i) => (
      <div 
        key={i} 
        className="particle"
        style={{
          width: '4px',
          height: '4px',
          background: 'aqua',
          borderRadius: '50%',
          position: 'absolute',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `floatParticle ${5 + Math.random() * 5}s ease-in-out infinite alternate,
                      sparkleParticle ${6 + Math.random() * 5}s ease-in-out infinite`,
          boxShadow: '0 0 8px aqua',
          opacity: 0.7,
        }}
      />
    ))}

    {/* Section Title */}
    <motion.h2 
      className="section-title"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        textAlign: 'center',
        textShadow: '0 0 10px #00f0ff',
      }}
    >
      What We Offer
    </motion.h2>

    {/* Services Grid */}
    <motion.div
      className="services-grid"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        width: '100%',
        maxWidth: '1200px',
        zIndex: 2,
      }}
    >
      {services.map((service, index) => (
        <div key={index} className="service-card" style={{
          background: 'rgba(10,10,30,0.8)',
          padding: '2rem',
          borderRadius: '16px',
          textAlign: 'center',
          boxShadow: '0 0 15px #00f0ff50',
          backdropFilter: 'blur(5px)',
        }}>
          <div className="icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
          <h3 style={{ marginBottom: '0.5rem' }}>{service.title}</h3>
          <p style={{ fontSize: '0.95rem' }}>{service.description}</p>
        </div>
      ))}
    </motion.div>

    {/* Animations */}
    <style>
      {`
        @keyframes floatParticle {
          0% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
          100% { transform: translate(-10px, -20px); }
        }

        @keyframes sparkleParticle {
          0%, 95%, 100% { box-shadow: 0 0 8px aqua; }
          97% { box-shadow: 0 0 20px white; }
        }

        .pulse-background {
          background: linear-gradient(135deg, #0a0a23, #1a1a40);
        }

        .particle:hover {
          box-shadow: 0 0 20px cyan, 0 0 40px cyan;
          transform: scale(1.8);
          cursor: pointer;
        }
      `}
    </style>
  </section>
);

export default ServicesSection;
