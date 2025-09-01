import React, { useState, useEffect } from 'react';
import './HomePage.css';




const HomePage = ({ home = {}, social = [] }) => {
  const [homeData, setHomeData] = useState(home);
  const [socialData, setSocialData] = useState(social);

  // Update state whenever props change (like when API fetch gives new data)
  useEffect(() => {
    setHomeData(home);
  }, [home]);

  useEffect(() => {
    setSocialData(social);
  }, [social]);
  
  
  return (
    <section id='homepage'>
      <div className='homepage'>
      
        <div className='welcome-heading'>
          <h1>Hello! I’m {homeData.name}</h1>
        </div>
        
        <div className='subcaption'>
          <h2>{homeData.subcaption}</h2>
        </div>
        
        <div className='avatar-para'>
          <div className='para'>
            <p>{homeData.paragraph}</p>
          </div>
          
          <div className='avatar-container'>
            <img src={homeData.avatar_img} alt="User avatar" />
          </div>
          
        </div>
        
        <div className='hire-btn'>
          <button className="btn-gradient"
          ><a
            href={homeData.HireMe_link}
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

