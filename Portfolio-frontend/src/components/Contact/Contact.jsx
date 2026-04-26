import React, { useState } from 'react';
import './Contact.css';
import { useDynamicLoader } from '../../hooks/useDynamicLoader';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const { startLoader, stopLoader } = useDynamicLoader() || {};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    if (startLoader) await startLoader();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('✅ Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Error:', error);
      setStatus('❌ Failed to send message.');
    } finally {
      if (stopLoader) await stopLoader();
    }
  };

  return (
    <section id="contact">
      <div className="contact-main">
        <div className="contact-heading">Contact Me</div>
        <div className="sub-heading">Your trusted one-stop hub for tech solutions</div>

        <form className="contact-container" onSubmit={handleSubmit}>
          <div className="section-1">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="section-2">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="section-3">
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Send Message</button>
        </form>

        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;