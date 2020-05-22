import React, { Component } from 'react';

import Header from './Header';

const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '',
    label: 'Posts'
  }
];

class App extends Component {
  render() {
    return (
      <div>
       <Header items={menu} /> 
       <li>{this.items.map}</li>
      </div>
    );
  }
}

export default App;