import React from 'react';
import Navbar from './Navbar';
import styles from './Home.module.css';

function Home() {
    const backgroundImageUrl = process.env.PUBLIC_URL + '/images/background.png';
    const additionalImageUrl = process.env.PUBLIC_URL + '/images/landingpage.png'; 
  return (

    
    <section className={styles.homeSection}>
      <Navbar />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
      </div>
      <div className={styles.content}>
      <div className={styles.centerImageContainer}>
        <img
          src={additionalImageUrl}
          alt="Center "
          className={styles.centerImage}
        />
      </div>
    
        
      </div>
    </section>
  );
}

export default Home;
