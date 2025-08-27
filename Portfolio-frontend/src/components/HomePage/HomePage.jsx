import React, { useState, useEffect } from 'react';
import './HomePage.css';


// const get_user_image_url(img_id) => {
//   user_img_url = `https://lh3.googleusercontent.com/d/${img_id}=w1000?authuser=0`
//   return user_img_url;
// }

const get_user_image_url = (img_id) => {
  const user_img_url = `https://lh3.googleusercontent.com/d/${img_id}=w1000?authuser=0`;
  return user_img_url;
};


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
        <div className='intro'>
          <div className='intro-name'>
            <h1><span className='highlight'>Hello! I’m {homeData.name} </span></h1>
            <h2>{homeData.subcaption}</h2>
            <p>{homeData.paragraph}</p>
            <a href={homeData.HireMe_link}>
              <button className="btn-gradient">HIRE ME</button>
            </a>
          </div>

          <div className='social-links'>
            <div className='head-text'>Follow Me</div>
            <br />
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

        <div className='user-avatar'>
          <img src={get_user_image_url(homeData.avatar_img)}  alt="User Avatar" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;

