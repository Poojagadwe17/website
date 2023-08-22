// Footer.js
import React from 'react';
import styles from './Footer.module.css'; 

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div>
        <h1>Call Us</h1>
        <div className={styles.callImage}>
        <img src="/images/bottomcall.png" alt="Call" className={styles.ImageIcon} />
       </div>
        <p className={styles.contactNumber}>+ 022 506 47538</p>
      </div>
      <div className={styles.iconColumn}>
      <div className={`${styles.iconImageContainer} ${styles.greenIcon}`}>
        <img src="/images/twitter.png" alt="Icon" className={styles.iconImage} />
        </div>
        <div className={`${styles.iconImageContainer} ${styles.whiteIcon}`}>
        <img src="/images/facebook.png" alt="Icon" className={styles.iconImage} />
       </div>
       <div className={`${styles.iconImageContainer} ${styles.whiteIcon}`}>
        <img src="/images/instagram.png" alt="Icon" className={styles.iconImage} />
     </div>
      </div>
      <div  className={styles.logoContainer}>
        <img src="/images/bottomlogo.png" alt="Logo" className={styles.logo} />
        <p className={styles.logoText}>© 2023 Piramal. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

export default Footer;
