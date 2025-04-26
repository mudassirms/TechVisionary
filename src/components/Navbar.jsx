import React, { useState, useEffect } from 'react';
import '../global.css';

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Detect scroll direction and hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // If user is scrolling down
      if (currentScrollTop > lastScrollTop) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // Prevent negative scroll values
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav 
      className={`navbar pulse-background ${scrollingDown ? 'hide' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'center', // center everything
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0a23, #1a1a40)',
        boxShadow: '0 0 20px #00f0ff',
        zIndex: 10,
        transition: 'transform 0.3s ease', // Smooth transition
        transform: scrollingDown ? 'translateY(-100%)' : 'translateY(0)', // Hide when scrolling down
      }}
    >
      {/* Navbar Inner Container */}
      <div style={{
        width: '100%',
        maxWidth: '1300px', // optional to limit width
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <div className="logo" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#00f0ff',
          textShadow: '0 0 10px #00f0ff',
        }}>
          TechVisionary Studio
        </div>

        {/* Menu */}
        <ul className="nav-links" style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          alignItems: 'center',
          gap: '2rem', // control space between items
        }}>
          <li><a href="#home" className="active" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
          
          {/* Services Dropdown */}
          <li className="dropdown" style={{ position: 'relative' }}>
            <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
            <ul className="dropdown-menu" style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              listStyle: 'none',
              padding: '1rem',
              background: 'rgba(0, 255, 255, 0.1)',
              boxShadow: '0 0 20px #00f0ff',
              borderRadius: '8px',
              display: 'none',
              zIndex: 5,
            }}>
              <li><a href="#web" style={{ color: 'white', textDecoration: 'none' }}>Web Development</a></li>
              <li><a href="#design" style={{ color: 'white', textDecoration: 'none' }}>Graphic Design</a></li>
              <li><a href="#ai" style={{ color: 'white', textDecoration: 'none' }}>AI/Data Science</a></li>
              <li><a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a></li>
            </ul>
          </li>

          <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
