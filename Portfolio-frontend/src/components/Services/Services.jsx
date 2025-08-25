import React from 'react';
import './Services.css';

const Services = ({services = []}) => {
  return (
    <section id='service'>
    <div className='service-main'>
      <div className='service-heading'>
        <h1 className='gradient-text'>Services</h1>
      </div>
      <span className='sub-head'>End-to-End Development Services Tailored to Your Needs</span>
      <div className='card-div'>
        {services.map((service,index) => (
        <div className='card' key={index}>
            <div className='card-heading'><h1>{service.service_name}</h1></div>
          <div className='card-img'><img src={service.icon_image} alt='dev' /></div>
          <span className='card-desc'>
              <p>{service.service_description}
            </p>
          </span>
        </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Services;
