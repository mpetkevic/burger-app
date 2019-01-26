import React from 'react';
import drinks from '../images/drinks.png';
import dishes from '../images/main_dish.png';
import deserts from '../images/cake.png';
import special from '../images/special.png';

const images = [drinks, dishes, deserts, special];

const Menu = (props) => {
  const menuItems = props.menu && props.menu.map((item, i) => {
    return (
      <li
        key={i}
        onClick={() => props.addOrder(item)}
      >
        {item.name}<span>{item.price}€</span>
      </li>
    )
  })

  const categories = props.categories.map((cat, i ) => {
    return (
      <div
        key={cat}
        onClick={() => props.onCateroryChange(i)}
        className={props.activeCategory === i ? "category active-cat" : "category"}>
        <img src={images[i]} alt=""/>
        <h3>{cat}</h3>
      </div>
    )
  })

  return (
    <div className="menu">
      <div className="categories">
        {categories}
      </div>
      <ul className="menu-items">
        {menuItems}
      </ul>
    </div>
  );
};

export default Menu;