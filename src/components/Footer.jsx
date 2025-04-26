import React from 'react';
import { motion } from 'framer-motion';
import '../global.css';

const Footer = () => (
  <footer 
    className="pulse-background"
    style={{
      overflow: 'hidden',
      position: 'relative',
      padding: '3rem 2rem',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}
  >
    {/* Floating Particles */}
    {[...Array(20)].map((_, i) => (
      <div 
        key={i} 
        className="particle"
        style={{
          width: '3px',
          height: '3px',
          background: 'aqua',
          borderRadius: '50%',
          position: 'absolute',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `floatParticle ${5 + Math.random() * 5}s ease-in-out infinite alternate,
                      sparkleParticle ${6 + Math.random() * 5}s ease-in-out infinite`,
          boxShadow: '0 0 6px aqua',
          opacity: 0.6,
        }}
      />
    ))}

    {/* Footer Content */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        zIndex: 2,
      }}
    >
      <h2 style={{
        fontSize: '1.8rem',
        marginBottom: '1rem',
        textShadow: '0 0 10px #00f0ff',
      }}>
        TechVisionary Studio 🚀
      </h2>

      <p style={{
        maxWidth: '600px',
        margin: '0 auto 1.5rem',
        fontSize: '1rem',
        color: '#ccc',
        lineHeight: '1.6',
      }}>
        Crafting Tomorrow’s Digital World Today — Web, AI, and Innovation Solutions.
      </p>

      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        marginBottom: '2rem',
        flexWrap: 'wrap',  // Make the links wrap on mobile
      }}>
        <a href="#home" className="footer-link">Home</a>
        <a href="#about" className="footer-link">About</a>
        <a href="#services" className="footer-link">Services</a>
        <a href="#products" className="footer-link">Products</a>
        <a href="#contact" className="footer-link">Contact</a>
      </div>

      <p style={{
        fontSize: '0.85rem',
        color: '#888',
      }}>
        © 2025 TechVisionary Studio. All rights reserved.
      </p>
    </motion.div>

    {/* Footer Animations */}
    <style>
      {`
        .footer-link {
          color: #00f0ff;
          text-decoration: none;
          font-weight: 500;
          transition: 0.3s;
        }

        .footer-link:hover {
          color: #8a2be2;
          text-shadow: 0 0 10px #8a2be2;
        }

        @keyframes floatParticle {
          0% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
          100% { transform: translate(-10px, -20px); }
        }

        @keyframes sparkleParticle {
          0%, 95%, 100% { box-shadow: 0 0 8px aqua; }
          97% { box-shadow: 0 0 20px white; }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          h2 {
            font-size: 1.5rem;
          }

          p {
            font-size: 0.9rem;
            max-width: 90%;
          }

          .footer-link {
            font-size: 0.9rem;
          }

          .footer-link:hover {
            font-size: 1rem;
          }

          .footer-link {
            margin: 0.5rem 0;
            font-size: 1rem;
          }

          .footer-link:last-child {
            margin-bottom: 0;
          }
        }

        /* Extra Mobile Adjustments */
        @media (max-width: 480px) {
          h2 {
            font-size: 1.3rem;
          }

          p {
            font-size: 0.85rem;
          }
        }
      `}
    </style>
  </footer>
);

export default Footer;
