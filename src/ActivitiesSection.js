import React from 'react';
import styles from './HomePage.module.css';

const activities = [
  { title: 'Swimming Pool', imageSrc: `${process.env.PUBLIC_URL}/pool.jpg` },
  { title: 'Onsen', imageSrc: `${process.env.PUBLIC_URL}/onsen.jpg` },
  { title: 'Fitness Center', imageSrc: `${process.env.PUBLIC_URL}/gym.jpg` },
  { title: 'Tennis Court', imageSrc: `${process.env.PUBLIC_URL}/ten.jpg` },
  { title: 'Golf Course', imageSrc: `${process.env.PUBLIC_URL}/golf.jpg` },
  { title: 'Gift Shop', imageSrc: `${process.env.PUBLIC_URL}/giftshop.jpg` },
];

const ActivitiesSection = () => {
  return (
    <section className={styles.activities}>
        <h2>Recreational Activities</h2>
        <div className={styles.activitiesGrid}>
          {activities.map((activity, index) => (
            <div key={index} className={styles.activityCard}>
              <div className={styles.imageContainer}>
                <img src={activity.imageSrc} alt={activity.title} className={styles.activityImage} />
              </div>
              <div className={styles.activityUndercard}>
                {activity.title}
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default ActivitiesSection;
