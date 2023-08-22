
import React from 'react';
import styles from './Amenties.module.css'; 
function Amenities() {

    const backgroundImageUrl = process.env.PUBLIC_URL + '/images/gym.jpg';

    const amenitiesData = [
        { iconName: 'call.png', heading: 'RECEPTION', text: '6 area for receptionist serve 24/7' },
        { iconName: 'security.png', heading: 'SECURITY', text: 'Security team with 24/7 camera system' },
        { iconName: 'ringing.png', heading: 'FIRE ALARM', text: 'Automatic fire extinguishing system' },
        { iconName: 'carparking.png', heading: 'PARKING', text: 'Parking area with extra capacity' },
        { iconName: 'boardmeeting.png', heading: 'CONFERENCE ROOM', text: '5 conference room setup in each block' },
        { iconName: 'airconditioner.png', heading: 'CONDITIONING', text: 'ensure ventilation and air conditioning' },
        { iconName: 'shopping.png', heading: 'SUPERMARKET', text: '5 supermarket in each block' },
        { iconName: 'massage.png', heading: 'SPA AND MASSAGE', text: 'Spa and Massage service for better health' },
        { iconName: 'swimming.png', heading: '4 SEASON POOL', text: '5 star indoor swimming 4 seasons' },
    ];

  return (
    <div className={styles.amenitiesContainer}>
      <h2 className={styles.heading}>ARANYA'S SERVICES</h2>
      <p className={styles.subHeading}>30+ PREMIUM AMENTIES</p>

      <div className={styles.amenitiesGrid}>
        {amenitiesData.map((amenity, index) => (
          <div key={index} className={styles.amenityItem}>
             <div className={styles.iconBackground}>
                            <img src={`/images/${amenity.iconName}`} alt={amenity.heading} className={styles.icon} />
             </div>
            <div className={styles.amenityDetails}>
              <h3 className={styles.amenityHeading}>{amenity.heading}</h3>
              <p className={styles.amenityText}>{amenity.text}</p>
            </div>
          </div>
        ))}
      </div>


      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
      </div>
    </div>
  );
}

export default Amenities;
