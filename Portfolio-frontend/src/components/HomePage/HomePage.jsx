import React, { useState, useEffect } from 'react';
import './HomePage.css';


const socialData = [
  {
    name: 'Github',
    link: 'https://github.com/pravin-kumar-21',
    social_icon: 'fa-brands fa-github'
  },
  {
    name: 'X',
    link: 'https://twitter.com/Pravin_2108',
    social_icon: 'fa-brands fa-square-x-twitter'
  },
  {
    name: 'Instagram',
    link: 'http://www.instagram.com/pravin__kumar__3/',
    social_icon: 'fa-brands fa-square-instagram'
  },
  {
    name: 'LinkedIN',
    link: 'http://linkedin.com/in/pravin-kumar2108',
    social_icon: 'fa-brands fa-linkedin'
  }
];



// const HomePage = ({ home = {}, social = [] }) => {
const HomePage = () => {
  // const [homeData, setHomeData] = useState(home);
  // const [socialData, setSocialData] = useState(social);
  

  // Update state whenever props change (like when API fetch gives new data)
  // useEffect(() => {
  //   setHomeData(home);
  // }, [home]);

  // useEffect(() => {
  //   setSocialData(social);
  // }, [social]);
  
  
  return (
    <section id='homepage'>
      <div className='homepage'>
      
        <div className='welcome-heading'>
          <h1>Hello! I’m Pravin Kumar</h1>
        </div>
        
        <div className='subcaption'>
          <h2>Turning Ideas into Web Experiences</h2>
        </div>
        
        <div className='avatar-para'>
          <div className='para'>
            <p>Full-Stack Engineer with strong experience in developing and deploying scalable web apps. Proficient in backend development with Django, DjangoRestFramework, seamlessly integrating front-end tech like HTML, Django templates, CSS, and Tailwind CSS. Skilled in React for smooth front-end and backend interaction. Adept at designing robust Python APIs, optimizing performance, and enhancing UX. Hands-on with Elasticsearch, API testing via Postman, and exploring machine learning. Proven ability to deliver innovative, high-quality, and scalable solutions</p>
          </div>
          
          <div className='avatar-container'>
            <img src='https://portfolio-builder-drf.s3.ap-south-1.amazonaws.com/Projects+/User+Avatar/IMG_20220418_223644-min.jpg' alt=' User Image'/>
          </div>
          
        </div>
        
        <div className='hire-btn'>
          <button className="btn-gradient"
          ><a
              href='https://mail.google.com/mail/u/0/?fs=1&to=pravinkumar2108@gmail.com&tf=cm'
          >
          HIRE ME
          </a>
          </button>
        </div>
        
        
        <div className='follow-link'>
          
          <div className='head-text'>Follow Me</div>
          
          <div className="icon-links">
            {socialData.map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                title={platform.name}
              >
                <i className={platform.social_icon}></i>
              </a>
            ))}
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default HomePage;

