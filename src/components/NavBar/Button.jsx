import React from 'react';
import './NavBar.scss';


class Button extends React.Component {
  render() {
    return (
      <button type="button" className="navbar-toggle" data-toggle="dropdown">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    );
    }
}

export default Button;
