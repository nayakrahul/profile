import React from 'react';
import './NavBar.scss';


class Menu extends React.Component {
  render() {
    return (
      <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
        <li className="li-menu" ><a href="#head" className="active" id= "menu-block"><p className="menu">Hello</p></a></li>
        <li className="li-menu"><a href="#work" id= "menu-block"><p className="menu">Work</p></a></li>
        <li className="li-menu"><a href="#contacts" id= "menu-block"><p className="menu">Get in Touch</p></a></li>
      </ul>
    );
  }
}

export default Menu;
