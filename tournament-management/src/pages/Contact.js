// src/pages/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                className="form-control" 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required 
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Contact Information</div>
            <div className="card-body">
              <p><strong>Address:</strong> 123 Tournament Street, Gaming City</p>
              <p><strong>Phone:</strong> +1 (123) 456-7890</p>
              <p><strong>Email:</strong> support@tournamentmanagement.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;