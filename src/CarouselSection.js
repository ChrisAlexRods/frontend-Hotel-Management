import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './HomePage.module.css';

const CarouselSection = () => {
  return (
    <section className={styles.intro}>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          interval={8000}
          className={styles.carousel}
        >
          <div>
            <img src={`${process.env.PUBLIC_URL}/1.jpg`} alt="Image 1" />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/2.jpg`} alt="Image 2" />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/3.jpg`} alt="Image 3" />
          </div>
        </Carousel>
        <div className={styles.overlay}>
          <h1>Welcome to Purin Hotel</h1>
          <div className={styles.buttons}>
            {/* <Link to="/booking" className={styles.button}>Book a Room</Link>
            <Link to="/events" className={styles.button}>See Events</Link> */}
          </div>
          {/* Include the BookingForm component */}
        </div>
      </section>
  );
};

export default CarouselSection;
