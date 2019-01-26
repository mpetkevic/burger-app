import React from 'react';
import Table from './Table'

const Orders = (props) => {
  const tables = props.tables.map((table, i) => {
    return <Table
      key={i}
      title={table}
      index={i}
      active={props.activeTable}
      changeTable={props.changeTable}
      orders={props.orders}
      removeOrder={props.removeOrder}
      checkout={props.checkout}
    />
  });

  return (
    <div className='orders'>
      {tables}
    </div>
  );
};

export default Orders;