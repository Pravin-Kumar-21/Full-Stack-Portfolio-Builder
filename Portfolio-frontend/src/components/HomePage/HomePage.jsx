import React from 'react'
import './HomePage.css';
const HomePage = ({ home = {}, social = [] }) => {
  return (
    <section id='homepage'>

      <div className='homepage'>

        <div className='intro'>

          <div className='intro-name'>
            <h1><span className='highlight'>Hello! I’m {home.name} </span></h1>
            <h2>{home.subcaption}</h2>
            <p>{home.paragraph}</p>
            <a href={home.HireMe_link}>
            <button className="btn-gradient" >
              HIRE ME
            </button>

            </a>
          </div>


          <div className='social-links'>

            <div className='head-text'>Follow Me</div>
            <br></br>
            <div className="icon-links">
            {social.map((platform, index) => (
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
          <img src="/IMG_20220418_223644-min.jpg" alt="User Avatar" />
        </div>

      </div>
    </section>
  )
}
export default HomePage;