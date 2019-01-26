import React, { Component } from 'react';
import Header from './components/Header';
import Orders from './components/Orders';
import Settings from './components/Settings';
import Statistics from './components/Statistics';
import Menu from './components/Menu';
import axios from 'axios';

const MENU_URL = 'https://enigmatic-cliffs-25405.herokuapp.com/menu';

class App extends Component {
  state = {
    navigation: ['Orders', 'Statistics', 'Settings'],
    activeTab: 0,
    categories: ['drinks', 'dishes', 'deserts', 'special'],
    tables: [
      'Two person table',
      'Family table',
      'Progers Table',
      'Coffee Table'
    ],
    activeTable: 0,
    activeCategory: 0,
    orders: [],
    menu: null,
    total: 0
  };

  componentDidMount = async () => {
    const { data } = await axios.get(MENU_URL); // palaukim, kol ateis doumenys
    // doumenys pasieksime kaip res.data
    console.log(data);
    this.setState({ menu: data.menu });
  };

  addOrder = menuItem => {
    let n = false;
    const orders = this.state.orders.map(order => {
      if (
        order.name === menuItem.name &&
        order.table === this.state.activeTable
      ) {
        n = true;
        return { ...order, count: order.count + 1 };
      } else {
        return order;
      }
    });
    if (n) {
      this.setState({ orders });
    } else {
      const orders = [
        ...this.state.orders,
        { ...menuItem, table: this.state.activeTable, count: 1 }
      ];
      this.setState({ orders });
    }
  };

  addSpecial = (e, item) => {
    e.preventDefault();
    console.log(item);
  };
  checkout = (table, total) => {
    console.log(table);
    const completed = [...this.state.completed];
    this.setState({
      orders: this.state.orders.filter(order => {
        if (order.table !== table) {
          return order;
        } else {
          completed.push(order);
        }
      })
    });
    this.setState({ total: this.state.total + total, completed });
  };

  removeOrder = order => {
    if (order.count > 1) {
      const orders = this.state.orders.map(item => {
        if (item.name === order.name && item.table === this.state.activeTable) {
          return { ...item, count: item.count - 1 };
        } else {
          return item;
        }
      });
      this.setState({ orders });
    } else {
      const orders = this.state.orders.filter(item => {
        if (item.name !== order.name && item.table === this.state.activeTable) {
          return item;
        }
      });
      this.setState({ orders });
    }
  };

  activeTabChange = activeTab => this.setState({ activeTab });

  activeTableChange = activeTable => this.setState({ activeTable });

  onCateroryChange = activeCategory => this.setState({ activeCategory });

  checkout = (tableTotal, table) => {
    this.setState({ total: this.state.total + tableTotal });
  };

  render() {
    const content = [
      <Orders
        key="1"
        tables={this.state.tables}
        activeTable={this.state.activeTable}
        changeTable={this.activeTableChange}
        orders={this.state.orders}
        removeOrder={this.removeOrder}
        checkout={this.checkout}
      />,
      <Statistics key="2" />,
      <Settings key="3" addSpecial={this.addSpecial} />
    ];

    const { menu, categories, activeCategory } = this.state;
    return (
      <div className="App">
        <Header
          nav={this.state.navigation}
          active={this.state.activeTab}
          changeActive={this.activeTabChange}
        />
        <Menu
          categories={this.state.categories}
          activeCategory={this.state.activeCategory}
          onCateroryChange={this.onCateroryChange}
          menu={menu && menu[categories[activeCategory]]}
          addOrder={this.addOrder}
        />
        {content[this.state.activeTab]}
      </div>
    );
  }
}

export default App;
