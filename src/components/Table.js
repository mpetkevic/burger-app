import React from 'react';

const Table = (props) => {
  let total = 0;
  const tableorders = props.orders.filter((item, i) => {
    if(item.table === props.index) {
      total += item.price * item.count;
      return item;
    }
  }).map((item, i) =>{
    return (
      <li className='item' key={i}>
        {item.count}x {item.name}
        <span onClick={() => props.removeOrder(item)} className="delete">X</span>
        <span className="price">{item.price}</span>
      </li>
    )
  });

  return (
    <div
      className={props.active === props.index ? 'table active-table' : 'table'}
      onClick={() => props.changeTable(props.index)}
    >
      <h4>{props.title}</h4>
      <ul>
        {tableorders}
      </ul>
      <nav>
        <div onClick={() => props.checkout(total, props.index)} className="btn">Check out</div>
        <h5>{total.toFixed(2)}€</h5>
      </nav>
    </div>
  );
};

export default Table;