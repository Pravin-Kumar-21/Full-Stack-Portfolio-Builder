import React, { useState } from 'react';
import './Contact.css';
import { useDynamicLoader } from '../../hooks/useDynamicLoader'; // adjust path if needed

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const { startLoader, stopLoader } = useDynamicLoader();  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    
    await startLoader();

    try {
      const response = await fetch(`${API_BASE_URL}api/contactme/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log(`${API_BASE_URL}`)
      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('❌ Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('⚠️ Something went wrong.');
    } finally {
      await stopLoader();
    }
  };

  return (
    <section id='contact'>
      <div className='contact-main'>
        <div className='contact-heading'>Contact Me</div>
        <div className='sub-heading'>Your trusted one-stop hub for tech solutions</div>

        <form className='contact-container' onSubmit={handleSubmit}>
          <div className='section-1'>
            <input type='text' name='name' placeholder='Your Name'
              value={formData.name} onChange={handleChange} required />
            <input type='email' name='email' placeholder='Your Email'
              value={formData.email} onChange={handleChange} required />
          </div>
          <div className='section-2'>
            <input type='text' name='subject' placeholder='Subject'
              value={formData.subject} onChange={handleChange} required />
          </div>
          <div className='section-3'>
            <textarea name='message' placeholder='Enter Your Message' rows="6"
              value={formData.message} onChange={handleChange} required />
          </div>
          <button type='submit'>Send Message</button>
        </form>

        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
