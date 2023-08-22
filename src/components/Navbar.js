import EnquiryPopup from './EnquiryPoup';
import styles from './Navbar.module.css';
import React, { useState } from 'react';

function Navbar() {

  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <nav className={styles.navbar}>
       <div className={styles.navbarLogo}>
        <img src="/images/logo.png" alt="Company Logo" className={styles.logoImage} />
      </div>
      <ul className={styles.navbarMenu}>
        <li  className={styles.navbarMenuItem}>HOME
         
        </li>
        <li  className={styles.navbarMenuItem}>OVERVIEW
         
        </li>
        <li  className={styles.navbarMenuItem}> AMENTIES
         
        </li>
        <li  className={styles.navbarMenuItem}>GALLERY
         
        </li>
        <li  className={styles.navbarMenuItem}>CONTACT
         
        </li>
      </ul>
      <button className={styles.enquiryButton} onClick={openPopup}>
        Enquiry Now
      </button>
      {isPopupVisible && <EnquiryPopup onClose={closePopup} />}
    </nav>
  );
}

export default Navbar;
