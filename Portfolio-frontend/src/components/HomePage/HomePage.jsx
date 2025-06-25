import React from 'react'
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div className='homepage'>
    
      <div className='intro'>
      
        <div className='intro-name'>
          <h1>Hey! I Am <br /><span className='highlight'>Pravin Kumar</span></h1>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus</p>
          <button className="btn-gradient">
            <FontAwesomeIcon icon={faHandPointRight} style={{ color: '#C0C0C0', fontSize: '16px' }} /> HIRE ME
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
        <img src="https://avatars.githubusercontent.com/u/94698587?s=400&u=2fef5f4dc6aab581b670a9f89d34d5903fba1270&v=4" alt="User Avatar" />
      </div>
      
    </div>
  )
}
export default HomePage 