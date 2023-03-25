import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const HomePage = () => {
  const activities = [
    'Swimming Pool',
    'Spa',
    'Fitness Center',
    'Tennis Court',
    'Golf Course',
    'Game Room',
  ];

  const menu = [
    {
      category: 'STARTERS', items: [
        { name: 'Old Fashioned Oatmeal', price: 14 },
        { name: 'Fresh Yogurt & Maple Granola', price: 13, description: '(Organic Berries, Raw New York Honey)' },
        { name: 'Seasonal Fruit & Berries', price: 12, description: '(With Whipped Cream)' },
      ]
    },
    // Add more categories here following the same format as above
  ];

  return (
    <div>
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
            <Link to="/booking" className={styles.button}>Book a Room</Link>
            <Link to="/events" className={styles.button}>See Events</Link>
          </div>
        </div>
      </section>

      <section className={styles.activities}>
        <h2>Recreational Activities</h2>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      <section className={styles.menu}>
        <h2>Breakfast Menu</h2>
        {menu.map((category, index) => (
          <div key={index}>
            <h3>{category.category}</h3>
            <ul>
              {category.items.map((item, i) => (
                <li key={i}>
                  {item.name} - ${item.price}
                  {item.description && <span>({item.description})</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.images}>
        <div className="grid">
          <img src="image1.jpg" alt="Image 1" />
          <img src="image2.jpg" alt="Image 2" />
          <img src="image3.jpg" alt="Image 3" />
          <img src="image4.jpg" alt="Image 4" />
        </div>
      </section>

      <section className={styles.description}>
        <p>
          Magemaent Hotel offers the ultimate luxury experience with top-notch amenities,
          elegant rooms, and exceptional dining options. With a variety of recreational
          activities and world-class services, your stay at our hotel will be truly memorable.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
