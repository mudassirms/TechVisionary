import React, { useState } from 'react';
import '../global.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section 
      id="contact" 
      className="contact-section pulse-background"
      style={{
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
      {/* Floating + rotating particles */}
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
            animation: `
              floatParticle ${5 + Math.random() * 5}s ease-in-out infinite alternate,
              pulseParticle ${2 + Math.random() * 3}s ease-in-out infinite alternate,
              sparkleParticle ${6 + Math.random() * 5}s ease-in-out infinite,
              rotateParticle ${10 + Math.random() * 10}s linear infinite
            `,
            boxShadow: '0 0 8px aqua',
            opacity: 0.7,
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          }}
        />
      ))}

      <h2 
        className="section-title" 
        style={{ 
          fontSize: '2.5rem', 
          marginBottom: '2rem', 
          textShadow: '0 0 10px #00f0ff',
          position: 'relative',
          zIndex: 2
        }}
      >
        Get In Touch
      </h2>

      <form 
        className="contact-form" 
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          style={{
            background: 'transparent',
            border: '2px solid #00f0ff',
            borderRadius: '8px',
            padding: '0.75rem 1rem',
            color: 'white',
            fontSize: '1rem',
            boxShadow: '0 0 8px #00f0ff',
            outline: 'none',
            transition: '0.3s ease',
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          style={{
            background: 'transparent',
            border: '2px solid #8a2be2',
            borderRadius: '8px',
            padding: '0.75rem 1rem',
            color: 'white',
            fontSize: '1rem',
            boxShadow: '0 0 8px #8a2be2',
            outline: 'none',
            transition: '0.3s ease',
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
          style={{
            background: 'transparent',
            border: '2px solid #00f0ff',
            borderRadius: '8px',
            padding: '1rem',
            color: 'white',
            fontSize: '1rem',
            boxShadow: '0 0 8px #00f0ff',
            resize: 'none',
            outline: 'none',
            transition: '0.3s ease',
          }}
        />
        <button 
          type="submit" 
          className="glow-button"
          style={{
            background: 'linear-gradient(90deg, #00f0ff, #8a2be2)',
            border: 'none',
            borderRadius: '8px',
            padding: '0.75rem 1rem',
            fontSize: '1.2rem',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 0 15px #00f0ff, 0 0 30px #8a2be2',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          Send Message
        </button>
      </form>

      {success && (
        <div 
          className="success-popup"
          style={{
            position: 'absolute',
            top: '5%',
            background: 'linear-gradient(90deg, #00f0ff, #8a2be2)',
            padding: '1rem 2rem',
            borderRadius: '12px',
            color: '#0a0a23',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            boxShadow: '0 0 20px #00f0ff, 0 0 30px #8a2be2',
            animation: 'popupFade 3s forwards',
            zIndex: 5,
          }}
        >
          🚀 Message Sent Successfully!
        </div>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes floatParticle {
            0% { transform: translate(0, 0); }
            50% { transform: translate(10px, -10px); }
            100% { transform: translate(-10px, -20px); }
          }

          @keyframes pulseParticle {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.5); opacity: 1; }
            100% { transform: scale(1); opacity: 0.8; }
          }

          @keyframes sparkleParticle {
            0%, 95%, 100% { box-shadow: 0 0 8px aqua; }
            97% { box-shadow: 0 0 20px white; }
          }

          @keyframes rotateParticle {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(180deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes popupFade {
            0% { opacity: 0; transform: translateY(-20px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; }
            100% { opacity: 0; transform: translateY(-20px); }
          }

          @keyframes backgroundPulse {
            0% { background: linear-gradient(135deg, #0a0a23, #1a1a40); }
            50% { background: linear-gradient(135deg, #1a1a40, #2a2a60); }
            100% { background: linear-gradient(135deg, #0a0a23, #1a1a40); }
          }

          .pulse-background {
            animation: backgroundPulse 15s ease-in-out infinite;
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
        `}
      </style>
    </section>
  );
};

export default ContactSection;
