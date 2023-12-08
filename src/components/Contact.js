import React, { useState } from 'react';

const Contact = () => {
  // State to hold form field values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData); // For example, log form data to the console
    // You can add your submission logic (e.g., sending data to server) here
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
   
    <div className="container mt-4 text-white  ">
       <div className=' p-5 contact mobileresponsive orderform rounded-3 d-flex flex-column justify-content-center align-items-center' >
        <div className='w-50 contact_responsive'>
      <p className='fs-2 my-3'>Get in Touch</p>
      <form onSubmit={handleSubmit} className='pe-5 '>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control bg-transparent contact_form "
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control bg-transparent contact_form"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control bg-transparent contact_form"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control bg-transparent contact_form"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-searchbar text-center">Submit</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Contact;
