import React, { useRef, useState } from 'react';
import './MyWork.css'

const MyWork = () => {
  const [open, setOpen] = useState({
    luein: false,
    celebal: false
  });

  const lueinRef = useRef(null);
  const celebalRef = useRef(null);

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getStyle = (ref, isOpen) => ({
    maxHeight: isOpen ? `${ref.current?.scrollHeight}px` : '0px',
    opacity: isOpen ? 1 : 0
  });

  return (
    <div className='work-main'>
    
    <div className='left-block'>
      <div className='img-div'>
        <img src="./code for life.gif" alt="User Avatar" />
      </div>
      <div className='download-div'>
        <button>Download Resume</button>
      </div>
    </div>
    
      <div className='content-div'>
        <span className='highlight'>Work Experience</span>

        {/* Luein Analytics */}
        <div className='title-1' onClick={() => toggle('luein')}>
          <span>1. Python Django Developer Intern</span>
          <span className='arrow-icon'>{open.luein ? '▲' : '▼'}</span>
        </div>
        <div className='title-2'>
          <span>Luein Analytics – Bengaluru, Karnataka</span>
          <span>Oct 2024 – Jan 2025</span>
        </div>
        <div
          className='description'
          ref={lueinRef}
          style={getStyle(lueinRef, open.luein)}
        >
          <ul>
            <li>Developed and maintained a course application platform using Django and Django Rest Framework (DRF).</li>
            <li>Built RESTful APIs, modified scraping code, and gathered data from various sources.</li>
            <li>Worked with senior developers to design the backend and implemented frontend using Django templates, HTML, CSS, and the company’s custom framework.</li>
            <li>Tested APIs, generated reports to optimize costs, and stored scraped data in Elasticsearch for faster retrieval.</li>
            <li>Wrote Python scripts to convert various API JSON formats into the required structure.</li>
          </ul>
        </div>

        {/* Celebal Technologies */}
        <div className='title-1' onClick={() => toggle('celebal')}>
          <span>2. React Developer Intern</span>
          <span className='arrow-icon'>{open.celebal ? '▲' : '▼'}</span>
        </div>
        <div className='title-2'>
          <span>Celebal Technologies – Jaipur, Rajasthan</span>
          <span>June 2024 – Aug 2024</span>
        </div>
        <div
          className='description'
          ref={celebalRef}
          style={getStyle(celebalRef, open.celebal)}
        >
          <ul>
            <li>Completed weekly assigned tasks within deadlines and collaborated with fellow interns.</li>
            <li>Attended company meetings and gained practical experience in React lifecycle methods and hooks.</li>
            <li>Worked on routing and navigation features using React Router and JavaScript.</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default MyWork;