import React from 'react';
import './NavBar.scss';


class Menu extends React.Component {
  render() {
    return (
      <div className={`overlay ${this.props.isOpen ? 'open' : ''}`} id="overlay">
        <nav className="overlay-menu">
          <ul>
            <li><a href="#head">Hello</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Get in Touch</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
