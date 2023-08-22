import React from 'react';
import styles from './Gallery.module.css'; 


function Gallery() {
    const galleryData = [
        {
            image: '/images/Amenti1.png',
            number: '1',
            heading: 'TOP CLASS CLUB & FACILITIES',
            text: 'With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.',
        },
        {
            image: '/images/Amenti2.png',
            number: '2',
            heading: 'TOWER EXCLUSIVE AMENITIES & FACILITIES',
            text: 'With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.',
        },
        {
            image: '/images/Amenti3.png',
            number: '3',
            heading: 'RECREATIONAL  AMENITIES & FACILITIES',
            text: 'With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.',
        },
        {
            image: '/images/Amenti4.png',
            number: '4',
            heading: 'MULTIPURPOSE GAMES ROOMS',
            text: 'With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.',
        },
    ];

    return (
        <>
        <div className={styles.galleryContainer}>
            <h2 className={styles.heading}>THE ADVANTAGES</h2>
            <p className={styles.subHeading}>AMENITIES</p>

            <div className={styles.imageGrid}>
                {galleryData.map((item, index) => (
                    <div key={index} className={styles.galleryItem}>
                        <div className={styles.imageMap}>
                            <span className={styles.imageNumber}>{item.number}</span>
                            <h1 className={styles.imageHeading}>{item.heading}</h1>
                        </div>
                        <img src={item.image} alt={` ${index}`} className={styles.image} />
                        <p className={styles.imageText}>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
      
        </>
    );
}

export default Gallery;
