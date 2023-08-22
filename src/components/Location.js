import React from 'react';
import styles from './Location.module.css'; 

function Location() {
  return (
    <div className={styles.locationContainer}>
      <div className={styles.textContainer}>
        <div className={styles.heading}>SPECTACULAR SURROUNDINGS AS FAR AS THE EYE CAN SEE</div>
        <div className={styles.subHeading}>Piramal Aranya is an ode to perfection. It balances contemporary design with the scenic natural beauty of its environment. Every residence invites you to soak in the surroundings, from the endless greenery of Rani Baug on the western side and the shimmering Arabian Sea on the east. Avyan at Piramal Aranya will be home to something truly spectacular with premium dual aspect living</div>
      </div>
      <div className={styles.numberContainer}>
        <div className={styles.numberText}>
          <span className={styles.number}>66%</span>
          <p className={styles.numberText}>Botanical garden views</p>
        </div>
        
        <div className={styles.numberText}>
          <span className={styles.number}>33%</span>
          <p className={styles.numberText}>Mumbai harbour and botanical garden views</p>
        </div>
       
        <div className={styles.numberText}>
          <span className={styles.number}>66%</span>
          <p className={styles.numberText}>Mumbai harbour views</p>
        </div>
      
      </div>
      <div className={styles.divider}></div>
      <div className={styles.bottomHeading}>
        <h2 className={styles.bottomHeadingText}>LOCATION</h2>
        <p className={styles.bottomSubHeadingText}>NEIGHBOURHOOD</p>
      </div>




      <div className={styles.locationGrid}>
        
        <div className={styles.locationItem}>
       
          <div className={styles.locationHeading}>Bhau Daji Lad Museum</div>
          <p className={styles.locationText}>3.5 Km Away</p>
        </div>
        <div className={styles.locationItem}>
          <div className={styles.locationHeading}>St. Paul’s Tamil Church</div>
          <p className={styles.locationText}>3.5 Km Away</p>
        </div>
        <div className={styles.locationItem}>
          <div className={styles.locationHeading}>Magen David Synagogue</div>
          <p className={styles.locationText}>3.5 Km Away</p>
        </div>
        <div className={styles.locationItem}>
          <div className={styles.locationHeading}>Byculla Club − Fire Temple</div>
          <p className={styles.locationText}>3.5 Km Away</p>
        </div>
      </div>
      
    </div>
  );
}

export default Location;
