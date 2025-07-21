import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className='service-main'>
      <div className='service-heading'>
        <h1 className='gradient-text'>Services</h1>
      </div>
      <span className='sub-head'>End-to-End Development Services Tailored to Your Needs</span>
      <div className='card-div'>
        <div className='card'>
          <div className='card-heading'><h1>Frontend Development</h1></div>
          <div className='card-img'><img src='#' alt='dev' /></div>
          <span className='card-desc'>
            <p>
              Aute aliquip nostrud do laborum. Laborum cillum occaecat commodo eu laborum officia ex...
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Services;
