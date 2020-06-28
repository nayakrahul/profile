import React from 'react';
import './ContactSection.scss';


class Email extends React.Component {
  render() {
    return (
      <div className="row">
        <h2 className="btn btn-link animated animatedFadeInUp fadeInUp" style={{animationDelay: '0.3s'}}>
          <div className="box1">
            <div className="blue-btn">
              <div className="first-link">
                <i className="fa fa-envelope"></i>
              </div>
              <a href="mailto:rahulnk521@gmail.com">
                <span>rahulnk521@gmail.com</span>
              </a>
            </div>
          </div>
        </h2>
      <div>
    );
  }
}

export default Email;
