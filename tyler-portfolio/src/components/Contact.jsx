import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';


export default function Contact() {
  const form = useRef();
  const [formValues, setFormValues] = useState({ user_name: '', user_email: '', message: '' });
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
    <motion.div className="container my-24 mx-auto px-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
    <section className="mb-32 text-center">
      <div className="mx-auto max-w-[700px] px-3">
        <h2 className="mb-12 text-3xl font-bold">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
            <div className="relative mb-6">
              <input type="text" name="user_name" required onChange={handleInputChange} onBlur={handleBlur} className="peer block w-full rounded border-0 bg-transparent py-2 px-3 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder=" " />
              <label className="absolute left-3 -top-3.5 text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" htmlFor="user_name">Name</label>
              {formErrors.user_name && <p className="text-xs text-red-500">{formErrors.user_name}</p>}
            </div>
            <div className="relative mb-6">
              <input type="email" name="user_email" required onChange={handleInputChange} onBlur={handleBlur} className="peer block w-full rounded border-0 bg-transparent py-2 px-3 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder=" " />
              <label className="absolute left-3 -top-3.5 text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" htmlFor="user_email">Email</label>
              {formErrors.user_email && <p className="text-xs text-red-500">{formErrors.user_email}</p>}
            </div>
            <div className="relative mb-6">
              <textarea name="message" required onChange={handleInputChange} onBlur={handleBlur} className="peer block w-full rounded border-0 bg-transparent py-2 px-3 leading-tight text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder=" "></textarea>
              <label className="absolute left-3 -top-3.5 text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" htmlFor="message">Message</label>
              {formErrors.message && <p className="text-xs text-red-500">{formErrors.message}</p>}
            </div>
            <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
          </form>
        </div>
      </section>
      </motion.div>
  );
  
}
