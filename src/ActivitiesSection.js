import React from 'react';
import styles from './HomePage.module.css';

const activities = [
  { title: 'Swimming Pool', imageSrc: `${process.env.PUBLIC_URL}/pool.jpg` },
  { title: 'Onsen', imageSrc: `${process.env.PUBLIC_URL}/onsen.jpg` },
  { title: 'Spa & Massage', imageSrc: `${process.env.PUBLIC_URL}/spa.jpg` },
  { title: 'Gym', imageSrc: `${process.env.PUBLIC_URL}/gym.jpg` },
  { title: 'Restaurant', imageSrc: `${process.env.PUBLIC_URL}/restaurant.jpg` },
];

const ActivitiesSection = () => {
  return (
    <section className={styles.activities}>
      <h2>Activities & Amenities</h2>
      <div className={styles.activitiesGrid}>
        {activities.map((activity, index) => (
          <div key={index} className={styles.activityCard}>
            <img src={activity.imageSrc} alt={activity.title} />
            <h3>{activity.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;
