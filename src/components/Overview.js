import React from 'react';
import styles from './Overview.module.css'; 




function Overview() {
  return (
    <section className={styles.overviewSection}>
     <div className={styles.searchBar}>
     <img src="/images/search.png" alt="Overview" className={styles.centerImage} />
      </div>

      <div className={styles.imageContainer}>
     
        <img src="/images/overview.png" alt="Overview" className={styles.centerImage} />
      </div>
      <div className={styles.divider}></div>

      <div className={styles.numberContainer}>
       <div className={styles.numberText}>
        <span className={styles.number}>50+</span>
        <p className={styles.numberText}>AMENTIES</p>
      </div>
      <div className={styles.numberText}>
        <span className={styles.number}>250</span>
        <p className={styles.numberText}>APARTMENTS</p>
      </div>
      <div className={styles.numberText}>
        <span className={styles.number}>9290</span>
        <p className={styles.numberText}>RECEREATIONAL SPACE</p>
      </div>

      <div className={styles.numberText}>
        <span className={styles.number}>1200</span>
        <p className={styles.numberText}>SLOT CAR PARKING</p>
      </div>
      </div>
    </section>
  );
}

export default Overview;
