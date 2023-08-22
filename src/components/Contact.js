import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const payload = {
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email
    };

    try {
      const response = await fetch('https://api.propacity.in/api/v1/webhooks/integr1ation/794d3601-ec97-454f-a3b8-6c5961ff8da8/insertLead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({
          name: '',
          email: '',
          mobile: ''
        });
      } else {
        console.error('Form submission failed');
      }

      
    } catch (error) {
      console.error('An error occurred:', error);
      console.error("Error response:", await error.response.json());
    }
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>CONTACT US</h2>
        <p className={styles.subHeading}>Please enter details below and we shall get in touch with you shortly</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.iconInput}>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className={styles.iconInput}>
            <input type="number" name="mobile" placeholder="Contact Number" value={formData.mobile} onChange={handleInputChange} />
          </div>
          <div className={styles.iconInput}>
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <img src={"/images/map.jpg"} alt="Contact" />
      </div>
    </div>
  );
}

export default Contact;
