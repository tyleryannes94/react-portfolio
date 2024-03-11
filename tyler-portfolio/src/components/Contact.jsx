import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let errors = { ...formErrors };

    if (!value.trim()) {
      errors[name] = 'This field is required.';
    } else if (name === 'user_email' && !validateEmail(value)) {
      errors[name] = 'Please enter a valid email address.';
    } else {
      delete errors[name];
    }

    setFormErrors(errors);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const errors = {};

    Object.keys(formValues).forEach((key) => {
      if (!formValues[key].trim()) {
        errors[key] = 'This field is required.';
      }
    });

    if (!validateEmail(formValues.user_email)) {
      errors.user_email = 'Please enter a valid email address.';
    }

    if (Object.keys(errors).length === 0) {
      emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          alert("Form submitted successfully!");
          form.current.reset();
      }, (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to submit the form. Please try again.");
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="user_name" required onChange={handleInputChange} onBlur={handleBlur} />
          {formErrors.user_name && <p className="error">{formErrors.user_name}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="user_email" required onChange={handleInputChange} onBlur={handleBlur} />
          {formErrors.user_email && <p className="error">{formErrors.user_email}</p>}
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" required onChange={handleInputChange} onBlur={handleBlur} />
          {formErrors.message && <p className="error">{formErrors.message}</p>}
        </div>
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}
