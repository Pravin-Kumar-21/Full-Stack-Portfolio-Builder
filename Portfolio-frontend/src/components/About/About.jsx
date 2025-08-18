import React, { useState, useEffect } from 'react';
import './About.css';

const About = ({ about = {}, education = [] }) => {
  const [heading, setHeading] = useState("");

  const headingsArray = about.floating_captions || [];

  useEffect(() => {
    if (headingsArray.length === 0) return;

    let i = 0;
    const interval = setInterval(() => {
      setHeading(headingsArray[i % headingsArray.length]);
      i++;
    }, 2000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [headingsArray]);

  const formattedEducation = education.map(entry => {
    const startYear = entry.start_date ? new Date(entry.start_date).getFullYear() : null;
    const endYear = entry.end_date ? new Date(entry.end_date).getFullYear() : null;

    const years = startYear && endYear
      ? `${startYear} - ${endYear}`
      : endYear
        ? `${endYear}`
        : '';

    return {
      degree: entry.degree,
      years: years,
      grade: entry.marks_scored
    };
  });

  return (
    <section id='about'>
      <div className="about-container">
        <div className="about-title-wrapper">
          <h1 className="about-title">About Me</h1>
        </div>

        <div className="about-divider">
          <div className="about-left">
            <h1 className="muted-subtitle">{heading}</h1>
            <p className="about-description">
              {about.description}
            </p>
          </div>

          <div className="about-right">
            <h1 className="section-title"> Education</h1>
            <div className="timeline">
              {formattedEducation.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>{edu.degree} {edu.years && `(${edu.years})`}</h3>
                    <p className="edu-score">{edu.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
