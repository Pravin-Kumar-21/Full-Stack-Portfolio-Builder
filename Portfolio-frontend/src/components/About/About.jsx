import React, { useState, useEffect } from 'react';
import './About.css';


const about = {
  "description": "I’m driven by curiosity, resilience, and a calm determination to solve problems that others walk away from.",
  "floating_captions": [
        "Django Enthusiast",
  "Full Stack Developer",
  "UI/UX Designer",
  "Backend Developer",
  "Frontend Developer"
    ],
"resume_link": "https://drive.google.com/file/d/1SHNWsPjqWGhes-cp4XtUPHMixVISYEQc/view?usp=sharing"
}

const education = [
  {
    "degree": "B.Tech Computer Science Engineering",
    "start_date": "2021-09-01",
    "end_date": "2025-06-30",
    "marks_scored": "7.79 CGPA"
  },
  {
    "degree": "Intermediate Pure Science with Computer Science",
    "start_date": "2019-04-01",
    "end_date": "2020-06-01",
    "marks_scored": "77.6%"
  },
  {
    "degree": "Matriculation",
    "start_date": null,
    "end_date": "2018-06-01",
    "marks_scored": "77.6%"
  }
]

const About = () => {
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
                    <h3>{edu.degree} <span> {edu.years && `(${edu.years})`}</span></h3>
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
