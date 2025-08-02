import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [heading, setHeading] = useState("Full Stack Developer");

  const headingsArray = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Django Enthusiast",
    "UI/UX Designer"
  ];

  const changeHeading = () => {
    let i = 0;
    const interval = setInterval(() => {
      setHeading(headingsArray[i % headingsArray.length]);
      i++;
    }, 2000); 

    return () => clearInterval(interval);
  };
        
  useEffect(() => {
    changeHeading();
  },[]); 

  return (
    <section id='about'> 
    <div className="about-container">
      <div className="about-title-wrapper">
        <h1 className="about-title">About Me</h1>
      </div>
    
      <div className="about-divider" >
      
        <div className="about-left">
          <h1 className="muted-subtitle">{heading}</h1> 
          <p className="about-description">
            I specialize in crafting scalable web apps with powerful backend logic and polished frontend experiences.
            Constantly learning, adapting, and challenging the status quo — code is my craft and curiosity is my fuel.
          </p>
        </div>


        <div className="about-right">
          <h1 className="section-title"> Education</h1>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>B.Tech - Computer Science</h3>
                <p className="edu-score">8.5 CGPA</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Higher Secondary (CS)</h3>
                <p className="edu-score">84%</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Matriculation</h3>
                <p className="edu-score">9.2 CGPA</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </section>
  );
};

export default About;
