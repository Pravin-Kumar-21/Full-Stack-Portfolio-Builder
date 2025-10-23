import React from 'react';
import './Services.css';

const services = [
  {
    "icon_image": "https://img.icons8.com/?size=100&id=y9OsIxmZTFWI&format=png&color=000000",
    "service_name": "UI/UX Developement",
    "shadow_icon": null,
    "service_description": "Designing intuitive, user-friendly interfaces with Figma and Tailwind CSS. I focus on clean, accessible designs that enhance the user experience across all devices."
  },
  {
    "icon_image": "https://img.icons8.com/?size=100&id=SBEjRDmczSCC&format=png&color=000000",
    "service_name": "Backend Developement",
    "shadow_icon": null,
    "service_description": "Building scalable, secure backends with Django and Django Rest Framework. I design optimized RESTful APIs, manage databases, and ensure smooth backend integration for reliable web applications."
  },
  {
    "icon_image": "https://img.icons8.com/?size=100&id=44484&format=png&color=000000",
    "service_name": "Frontend Developement",
    "shadow_icon": null,
    "service_description": "Creating responsive, interactive interfaces using HTML, CSS, JavaScript, and React. I ensure a smooth user experience with modern tools like Tailwind CSS and efficient frontend frameworks."
  },
  {
    "icon_image": "https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000",
    "service_name": "Application Development",
    "shadow_icon": null,
    "service_description": "Developing cross-platform mobile apps using Flutter, optimizing for both Android and iOS with smooth performance and intuitive design."
  }
]

const Services = () => {
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
