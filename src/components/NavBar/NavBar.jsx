import React from 'react';
import Button from './Button.jsx';
import Menu from './Menu.jsx';
import './NavBar.scss';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = { isOpen: false };
  }

  onUpdate() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div>
        <Button onUpdate={this.onUpdate}/>
        <Menu isOpen={this.state.isOpen}/>
      </div>
    );
  }
}

export default NavBar;
