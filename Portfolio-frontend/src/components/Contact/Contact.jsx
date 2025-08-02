import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='contact-main'>
        <div className='contact-heading'>Contact Me</div>
        <div className='sub-heading'>Your trusted one-stop hub for tech solutions</div>
        <form className='contact-container'>
          <div className='section-1'>
            <input type='text' placeholder='Your Name' required />
            <input type='email' placeholder='Your Email' required />
          </div>
          <div className='section-2'>
            <input type='text' placeholder='Subject' required />
          </div>
          <div className='section-3'>
            <textarea placeholder='Enter Your Message' rows="6" required></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
