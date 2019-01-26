import React from 'react';

const Header = (props) => {
  const navItems = props.nav.map((navItem, i) => {
    return (
      <li
        key={navItem}
        className={i === props.active? 'active' : null}
        onClick={()=> props.changeActive(i)}
      >{navItem}</li>
    )
  });
  return (
    <header>
      <h2>Menu</h2>
      <nav>
        <h1>Home <span>Grill</span></h1>
        <ul>
          {navItems}
        </ul>
      </nav>
    </header>
  );
};

export default Header;