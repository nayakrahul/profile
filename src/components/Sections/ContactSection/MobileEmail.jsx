import React from 'react';
import './ContactSection.scss';


class Mobile extends React.Component {
  render() {
    return (
			<h2 className="btn btn-link">
				<div className="box1">
					<div className="blue-btn">
						<div className="first-link">
							<i className="fa fa-mobile"></i>   Mobile
						</div>
						<a href="tel:+91 8953455796">
						<b>8953455796</b>
						</a>
					</div>
				</div>
			</h2>				
    );
  }
}

class Email extends React.Component {
  render() {
    return (
			<h2 className="btn btn-link">
				<div className="box1">
					<div className="blue-btn">
						<a className="first-link">
							<i className="fa fa-envelope"></i>   Email
						</a>
						<a href="mailto:rahulnk521@gmail.com">
						<b>rahulnk521@gmail.com</b>
						</a>
					</div>
				</div>
			</h2>				
    );
  }
}

class MobileEmail extends React.Component {
  render() {
    return (
      <div className="row">
				<Mobile/>
				<Email/>		
			</div>
    );
  }
}

export default MobileEmail;
