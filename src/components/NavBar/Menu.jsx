import React from 'react';
import './NavBar.scss';


class Menu extends React.Component {
  render() {
    return (
      <div className={`overlay ${this.props.isOpen ? 'open' : ''}`} id="overlay">
        <nav className="overlay-menu">
          <ul>
            <li><a href="#head" class="active">Hello</a></li>
            <li><a href="#work" class="non-active">Work</a></li>
            <li><a href="#contact" class="non-active">Get in Touch</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
