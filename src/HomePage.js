import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const HomePage = () => {
  const activities = [
    { title: 'Swimming Pool', imageSrc: `${process.env.PUBLIC_URL}/pool.jpg` },
    { title: 'Onsen', imageSrc: `${process.env.PUBLIC_URL}/onsen.jpg` },
    { title: 'Fitness Center', imageSrc: `${process.env.PUBLIC_URL}/gym.jpg` },
    { title: 'Tennis Court', imageSrc: `${process.env.PUBLIC_URL}/ten.jpg` },
    { title: 'Golf Course', imageSrc: `${process.env.PUBLIC_URL}/golf.jpg` },
    { title: 'Gift Shop', imageSrc: `${process.env.PUBLIC_URL}/giftshop.jpg` },
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
        { name: 'Old Fashioned Oatmeal', price: 14, imageSrc: `${process.env.PUBLIC_URL}/oatmeal.jpg` },
        { name: 'Fresh Yogurt & Maple Granola', price: 13, description: '(Organic Berries, Raw New York Honey)', imageSrc: `${process.env.PUBLIC_URL}/van.jpg`},
        { name: 'Seasonal Fruit & Berries', price: 12, description: '(With Whipped Cream)', imageSrc: `${process.env.PUBLIC_URL}/sberry.jpg` },
      ]
    },
    {
      category: 'EGGS', items: [
        { name: 'Eggs Benedict', price: 16, description: '(Poached eggs, Canadian bacon, English muffin, hollandaise sauce)', imageSrc: `${process.env.PUBLIC_URL}/ben.jpg`},
        { name: 'Omelette', price: 15, description: '(Choice of cheese, vegetables, and meat)', imageSrc: `${process.env.PUBLIC_URL}/oml.jpg`},
        { name: 'Frittata', price: 14, description: '(Choice of vegetables and cheese)',imageSrc: `${process.env.PUBLIC_URL}/frit.jpeg`},
      ]
    },
    {
      category: 'PANCAKES', items: [
        { name: 'Classic Pancakes', price: 12, description: '(Buttermilk pancakes, maple syrup, whipped butter)', imageSrc: `${process.env.PUBLIC_URL}/classic.jpg` },
        { name: 'Blueberry Pancakes', price: 14, description: '(Buttermilk pancakes, blueberries, maple syrup, whipped butter)', imageSrc: `${process.env.PUBLIC_URL}/blue.jpg`},
        { name: 'Chocolate Chip Pancakes', price: 14, description: '(Buttermilk pancakes, chocolate chips, whipped butter)', imageSrc: `${process.env.PUBLIC_URL}/choc.jpg`},
      ]
    },
    {
      category: 'WAFFLES', items: [
        { name: 'Belgian Waffles', price: 12, description: '(Golden brown waffles, maple syrup, whipped butter)', imageSrc: `${process.env.PUBLIC_URL}/bel.jpg`},
        { name: 'Strawberry Waffles', price: 14, description: '(Golden brown waffles, fresh strawberries, whipped cream)', imageSrc: `${process.env.PUBLIC_URL}/straw.jpg`},
        { name: 'Banana Nutella Waffles', price: 14, description: '(Golden brown waffles, sliced bananas, Nutella, whipped cream)', imageSrc: `${process.env.PUBLIC_URL}/nut.jpg`},
      ]
    },
    {
      category: 'BAGELS', items: [
        { name: 'Smoked Salmon Bagel', price: 16, description: '(Toasted bagel, smoked salmon, cream cheese, capers, red onions, tomatoes)', imageSrc: `${process.env.PUBLIC_URL}/salmon.jpg` },
        { name: 'Vegetarian Bagel', price: 14, description: '(Toasted bagel, cream cheese, avocado, tomatoes, red onions)', imageSrc: `${process.env.PUBLIC_URL}/veg.jpg` },
        { name: 'Egg and Cheese Bagel', price: 12, description: '(Toasted bagel, scrambled eggs, cheddar cheese)', imageSrc: `${process.env.PUBLIC_URL}/ec.jpg` },
      ]
    }
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
  <div className={styles.menuGrid}>
    {menu.map((category, index) => (
      <div key={index}>
        <h3>{category.category}</h3>
        <div className={styles.menuItems}>
          {category.items.map((item, i) => (
            <div key={i} className={styles.menuItem}>
              <div className={styles.mimageContainer}>
                <img src={item.imageSrc} alt={item.name} className={styles.menuImage} />
              </div>
              <div className={styles.menuItemInfo}>
                <div className={styles.menuItemName}>{item.name}</div>
                <div className={styles.menuItemDescription}>{item.description}</div>
                <div className={styles.menuItemPrice}>${item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
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
