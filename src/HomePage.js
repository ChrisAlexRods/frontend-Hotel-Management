import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const HomePage = () => {
  const activities = [
    { title: 'Swimming Pool', imageSrc: `${process.env.PUBLIC_URL}/1.jpg` },
    { title: 'Spa', imageSrc: `${process.env.PUBLIC_URL}/2.jpg` },
    { title: 'Fitness Center', imageSrc: `${process.env.PUBLIC_URL}/3.jpg` },
    { title: 'Tennis Court', imageSrc: `${process.env.PUBLIC_URL}/4.jpg` },
    { title: 'Golf Course', imageSrc: `${process.env.PUBLIC_URL}/5.jpg` },
    { title: 'Game Room', imageSrc: `${process.env.PUBLIC_URL}/6.jpg` },
  ];

  const ActivityCard = ({ imageSrc, title }) => (
    <div className={styles.activityCard}>
      <img src={imageSrc} alt={title} className={styles.activityImage} />
      <div className={styles.activityUndercard}>{title}</div>
    </div>
  );


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
  <div className={styles.activitiesGrid}>
    {activities.map((activity, index) => (
      <div key={index}>
        <ActivityCard imageSrc={activity.imageSrc} title={activity.title} />
      </div>
    ))}
  </div>
</section>


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
