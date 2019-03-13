import React from 'react';
import './ContactSection.scss';


class Footer extends React.Component {
  render() {
    return (
      <footer>&copy; {new Date().getFullYear()} Rahul Nayak</footer>
    );
  }
}

export default Footer;
