import React from 'react';
import styles from './HomePage.module.css';

const menu = [
    {
      category: 'STARTERS', items: [
        { name: 'Old Fashioned Oatmeal', price: 14, imageSrc: `${process.env.PUBLIC_URL}/oatmeal.jpg` },
        { name: 'Fresh Yogurt & Maple Granola', price: 13, description: '(Organic Berries, Raw New York Honey)', imageSrc: `${process.env.PUBLIC_URL}/van.jpg` },
        { name: 'Seasonal Fruit & Berries', price: 12, description: '(With Whipped Cream)', imageSrc: `${process.env.PUBLIC_URL}/sberry.jpg` },
      ]
    },
    {
      category: 'EGGS', items: [
        { name: 'Eggs Benedict', price: 16, description: '(Poached eggs, Canadian bacon, English muffin, hollandaise sauce)', imageSrc: `${process.env.PUBLIC_URL}/ben.jpg` },
        { name: 'Omelette', price: 15, description: '(Choice of cheese, vegetables, and meat)', imageSrc: `${process.env.PUBLIC_URL}/oml.jpg` },
        { name: 'Frittata', price: 14, description: '(Choice of vegetables and cheese)', imageSrc: `${process.env.PUBLIC_URL}/frit.jpeg` },
      ]
    },
    {
      category: 'PANCAKES', items: [
        { name: 'Classic Pancakes', price: 12, description: '(Buttermilk pancakes, maple syrup, whipped butter)', imageSrc: `${process.env.PUBLIC_URL}/classic.jpg` },
        { name: 'Blueberry Pancakes', price: 14, description: '(Buttermilk pancakes, blueberries, maple syrup, whipped butter)', imageSrc: `${process.env.PUBLIC_URL}/blue.jpg` },
        { name: 'Chocolate Chip Pancakes', price: 14, description: '(Buttermilk pancakes, chocolate chips, whipped butter)', imageSrc: `${process.env.PUBLIC_URL}/choc.jpg` },
      ]
    },
    {
      category: 'WAFFLES', items: [
        { name: 'Belgian Waffles', price: 12, description: '(Golden brown waffles, maple syrup, whipped butter)', imageSrc: `${process.env.PUBLIC_URL}/bel.jpg` },
        { name: 'Strawberry Waffles', price: 14, description: '(Golden brown waffles, fresh strawberries, whipped cream)', imageSrc: `${process.env.PUBLIC_URL}/straw.jpg` },
        { name: 'Banana Nutella Waffles', price: 14, description: '(Golden brown waffles, sliced bananas, Nutella, whipped cream)', imageSrc: `${process.env.PUBLIC_URL}/nut.jpg` },
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

const MenuSection = () => {
  return (
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
  );
};

export default MenuSection;
