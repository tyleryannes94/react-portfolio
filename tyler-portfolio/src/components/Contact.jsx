import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY
    )
    .then((result) => {
        console.log('SUCCESS!', result.text);
    }, (error) => {
        console.log('FAILED...', error.text);
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" required />
        </div>
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}
