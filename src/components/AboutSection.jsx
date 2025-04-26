import React from 'react';
import '../global.css';

const AboutSection = () => (
  <section 
    id="about" 
    className="about-section"
    style={{
      background: 'linear-gradient(135deg, #0a0a23, #1a1a40)',
      overflow: 'hidden',
      position: 'relative',
      padding: '6rem 2rem',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: 'white',
    }}
  >
    {/* Floating Futuristic Particles */}
    {[...Array(100)].map((_, i) => (
      <div 
        key={i} 
        className="particle"
        style={{
          width: `${2 + Math.random() * 4}px`,
          height: `${2 + Math.random() * 4}px`,
          background: 'radial-gradient(circle, #00f0ff, #8a2be2)',
          borderRadius: '50%',
          position: 'absolute',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `
            floatParticle ${5 + Math.random() * 5}s ease-in-out infinite alternate,
            pulseParticle ${3 + Math.random() * 4}s ease-in-out infinite alternate,
            shimmerParticle ${4 + Math.random() * 6}s linear infinite
          `,
          boxShadow: '0 0 12px #00f0ff, 0 0 24px #8a2be2',
          opacity: 0.7,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
      />
    ))}

    {/* About Content */}
    <div className="about-content" style={{ position: 'relative', zIndex: 2, maxWidth: '800px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textShadow: '0 0 10px #00f0ff' }}>
        About TechVisionary Studio
      </h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.8' }}>
        At <strong>TechVisionary Studio</strong>, we merge creativity with cutting-edge technology to deliver extraordinary results.
        From sleek websites and eye-catching designs to smart AI-powered solutions, our team is passionate about helping brands thrive
        in the digital era.
      </p>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
        We don’t just build products — we build experiences that are intelligent, bold, and futuristic.
      </p>
    </div>

    {/* Particle Animations */}
    <style>
      {`
        @keyframes floatParticle {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -10px) scale(1.2); }
          100% { transform: translate(-10px, 10px) scale(1); }
        }

        @keyframes pulseParticle {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes shimmerParticle {
          0% { filter: brightness(100%); }
          50% { filter: brightness(130%); }
          100% { filter: brightness(100%); }
        }

        .particle:hover {
          box-shadow: 0 0 20px #00f0ff, 0 0 40px #8a2be2;
          transform: scale(2);
          cursor: pointer;
        }
      `}
    </style>
  </section>
);

export default AboutSection;
