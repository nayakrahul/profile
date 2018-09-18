import React from 'react';
import Button from './Button.jsx';
import Menu from './Menu.jsx';
import './NavBar.scss';


class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="mainmenu">
          <div className="container">
            <div className="dropdown">
              <Button/>
              <Menu/>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
