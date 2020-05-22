import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <button>
       
        {this.props.items.map((item, index) =>
  <a href={item.link} key={index}>{item.label}</a>
)};
        Header
      </button>
    );
  }
}

export default Header;