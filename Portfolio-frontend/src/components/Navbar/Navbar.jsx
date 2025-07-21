import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`nav-list ${isNavVisible ? 'open' : ''}`}>
          <div className='nav-btn'>Home</div>
          <div className='nav-btn'>About Me</div>
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
