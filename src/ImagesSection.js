import React from 'react';
import styles from './HomePage.module.css';

const ImagesSection = () => {
  return (
    <section className={styles.images}>
        <div className={styles.wrapper}>
          <div className={styles.stripe}>Always there with just what you need</div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <img src={`${process.env.PUBLIC_URL}/4.jpg`} alt="Image 4" />
              <div className={styles.caption}>Enjoy our dedicated office space</div>
            </div>
            <div className={styles.card}>
              <img src={`${process.env.PUBLIC_URL}/5.jpg`} alt="Image 5" />
              <div className={styles.caption}>Stay and rest in our sauna</div>
            </div>
            <div className={styles.card}>
              <img src={`${process.env.PUBLIC_URL}/6.jpg`} alt="Image 6" />
              <div className={styles.caption}>Take dive into our traditional rooms</div>
            </div>
            <div className={styles.card}>
              <img src={`${process.env.PUBLIC_URL}/13.jpg`} alt="Image 13" />
              <div className={styles.caption}>Enjoy our masterclass bedrooms</div>
            </div>
            <div className={styles.card}>
              <img src={`${process.env.PUBLIC_URL}/14.jpg`} alt="Image 14" />
              <div className={styles.caption}>Enjoy our open bar</div>
            </div>
            <div className={styles.card}>
              <img src={`${process.env.PUBLIC_URL}/15.jpg`} alt="Image 15" />
              <div className={styles.caption}>Rest easy in our lounge</div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ImagesSection;
