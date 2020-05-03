import React from 'react';
import './ContactSection.scss';


class Footer extends React.Component {
  render() {
    return (
      <footer className="animated animatedFadeInUp fadeInUp" style={{animationDelay: '1s'}}>
      &copy; {new Date().getFullYear()} Rahul Nayak
      </footer>
    );
  }
}

export default Footer;
