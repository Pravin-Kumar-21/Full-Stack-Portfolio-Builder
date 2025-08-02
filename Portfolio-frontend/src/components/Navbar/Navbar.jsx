import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navRef = useRef(null);

  const togglebar = () => {
    setIsNavVisible((prev) => !prev);
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-logo">
        <h1>Full Stack Developer {'<'}<span className='blink'>/</span>{'>'} </h1>
      </div>
      <div className="navbar-links ">
        <div className="bar-btn" onClick={togglebar}>
          {isNavVisible ? (
            // X icon
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </div>
        <div className={`nav-list ${isNavVisible ? 'open' : ''}`}>
          <div className='nav-btn'>Home</div>
          <div className='nav-btn'>About</div>
          <div className='nav-btn'>Services</div>
          <div className='nav-btn'>Experiences</div>
          <div className='nav-btn'>Skills</div>
          <div className='nav-btn'>Projects</div>
          <div className='nav-btn'>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
