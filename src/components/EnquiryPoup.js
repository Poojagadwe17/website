import React from 'react';
import { useState } from 'react';
import styles from './EnquiryPopup.module.css'; 

function EnquiryPopup({ onClose }) {
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

  const handleSubmit = event => {
    event.preventDefault();
   
    onClose();
  };


  return (
    <div className={styles.popupContainer}>
        <button className={styles.closeButton} onClick={onClose}>
        X
      </button>
      <div className={styles.imageContainer}>
        <img src="/images/background.png" alt="Enquiry" className={styles.popupImage} />
      </div>
      <div className={styles.formContainerE}>
        <h2>Book Site Tour</h2>
        <form onSubmit={handleSubmit}>
          <label className={styles.labelE} htmlFor="name">Name</label>
          <input
          className={styles.inputE}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label className={styles.labelE} htmlFor="email">Email</label>
          <input
          className={styles.inputE}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label className={styles.labelE} htmlFor="mobile">Mobile</label>
          <input
          className={styles.inputE}
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className={styles.bookNowButton}>Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default EnquiryPopup;