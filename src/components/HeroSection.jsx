import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../global.css';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(null);

  const zones = [
    { id: 1, label: 'CPU', position: { top: '30%', left: '50%' }, stats: '92% Usage\nNeural Load: 67%\nStatus: Stable' },
    { id: 2, label: 'RAM', position: { top: '50%', left: '30%' }, stats: '80% Usage\nSpeed: 16GB/s\nStatus: Optimal' },
    { id: 3, label: 'Network', position: { top: '70%', left: '40%' }, stats: 'Network Speed: 1Gbps\nLatency: 30ms' },
    { id: 4, label: 'Storage', position: { top: '60%', left: '70%' }, stats: 'Disk Usage: 50%\nFree Space: 500GB' },
  ];

  return (
    <section 
      id="home" 
      className="hero-section pulse-background"
      style={{
        overflow: 'hidden',
        position: 'relative',
        padding: '6rem 2rem',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        color: 'white',
      }}
    >
      {/* Floating Particles */}
      {[...Array(50)].map((_, i) => (
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

      {/* Hero Text */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: 'relative', 
          zIndex: 2, 
          textAlign: 'center',
          flex: 1,
        }}
      >
        <h1 style={{ fontSize: '3rem', textShadow: '0 0 10px #00f0ff' }}>
          Empowering Innovation Through Design & AI
        </h1>
        <p style={{ marginTop: '1rem', fontSize: '1.2rem', textShadow: '0 0 5px #00f0ff' }}>
          From futuristic websites to AI-powered apps — TechVisionary Studio brings your vision to life.
        </p>
        <motion.button
          className="glow-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: '2rem',
            background: 'linear-gradient(90deg, #00f0ff, #8a2be2)',
            border: 'none',
            borderRadius: '8px',
            padding: '0.75rem 1.5rem',
            fontSize: '1.2rem',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 0 15px #00f0ff, 0 0 30px #8a2be2',
          }}
        >
          Let’s Build the Future
        </motion.button>
      </motion.div>

      {/* HUD Image + Zones */}
      <motion.div
        className="hero-media hud-wrapper"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
        }}
      >
        <img src="/Iron_Theme.png" alt="AI HUD" className="hud-image" style={{ width: '100%', maxWidth: '600px' }} />

        {zones.map(zone => (
          <div
            key={zone.id}
            className="hud-zone"
            style={{
              position: 'absolute',
              top: zone.position.top,
              left: zone.position.left,
              width: '50px',
              height: '50px',
              border: '2px solid aqua',
              borderRadius: '50%',
              cursor: 'pointer',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0, 255, 255, 0.1)',
              transition: '0.3s ease',
            }}
            onClick={() => setShowModal(zone.id)}
          />
        ))}

        {/* Modals */}
        {zones.map(zone => (
          showModal === zone.id && (
            <div 
              key={zone.id} 
              className="hud-modal" 
              onClick={() => setShowModal(null)}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                padding: '2rem',
                borderRadius: '16px',
                color: '#0a0a23',
                zIndex: 5,
                boxShadow: '0 0 20px #00f0ff, 0 0 30px #8a2be2',
              }}
            >
              <div 
                className="hud-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <h2>{zone.label} Stats</h2>
                <p style={{ whiteSpace: 'pre-line' }}>{zone.stats}</p>
                <button 
                  onClick={() => setShowModal(null)}
                  style={{
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    background: '#0a0a23',
                    color: '#00f0ff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 0 10px #00f0ff',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )
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
            background: linear-gradient(135deg, #0a0a23, #1a1a40); /* Static background */
          }

          .particle:hover {
            box-shadow: 0 0 20px cyan, 0 0 40px cyan;
            transform: scale(1.8);
            cursor: pointer;
          }

          .glow-button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 25px #00f0ff, 0 0 50px #8a2be2;
          }

          /* Mobile Responsiveness */
          @media (max-width: 768px) {
            .hero-section {
              flex-direction: column;
              padding: 4rem 2rem;
            }

            .hero-text h1 {
              font-size: 2rem;
            }

            .hero-text p {
              font-size: 1rem;
            }

            .glow-button {
              font-size: 1rem;
              padding: 0.6rem 1.2rem;
            }

            .hud-wrapper img {
              max-width: 400px;
            }

            .hud-zone {
              width: 40px;
              height: 40px;
            }
          }

          @media (max-width: 480px) {
            .hero-text h1 {
              font-size: 1.6rem;
            }

            .hero-text p {
              font-size: 0.9rem;
            }

            .glow-button {
              font-size: 0.9rem;
              padding: 0.5rem 1rem;
            }

            .hud-wrapper img {
              max-width: 320px;
            }

            .hud-zone {
              width: 35px;
              height: 35px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
