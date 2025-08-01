import React from 'react'
import './HomePage.css';
const HomePage = () => {
  return (
    <div className='homepage'>
    
      <div className='intro'>
      
        <div className='intro-name'>
          <h1><span className='highlight'>Hello! I’m Pravin Kumar </span></h1>
          <h2>Turning Ideas into Web Experiences</h2>
          <p>Full-Stack Engineer with strong experience in developing and deploying scalable web apps. Proficient in backend
            development with Django, DjangoRestFramework, seamlessly integrating front-end tech like HTML, Django
            templates, CSS, and Tailwind CSS. Skilled in React for smooth front-end and backend interaction. Adept at
            designing robust Python APIs, optimizing performance, and enhancing UX. Hands-on with Elasticsearch, API
            testing via Postman, and exploring machine learning. Proven ability to deliver innovative, high-quality, and
            scalable solutions</p>
          <button className="btn-gradient">
            HIRE ME
          </button>
        </div>
        
        
        <div className='social-links'>
        
          <div className='head-text'>Follow Me</div>
            <br></br>
            <div className="icon-links">
              <a
                href="#"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="">Icon</i>
              </a>
            </div>
          
        </div>
        
      </div>
      
      <div className='user-avatar'>
        <img src="/IMG_20220418_223644-min.jpg" alt="User Avatar" />
      </div>
      
    </div>
  )
}
export default HomePage;