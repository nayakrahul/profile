import React from 'react';
import './HelloSection.scss';
import '../Sections.scss';


class Hello extends React.Component {
  render() {
    return (
      <section className="section" id="head">
				<div className="container">
					<div className ="hello-wrapper">
						<div className="row">
							<div className="col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1 text-center">	
								<h2 className="title">Rahul Nayak</h2>
								<h4 className="subtitle">Just a guy.</h4>	
								<h5 className="tagline">
									<sup><i className="fa fa-quote-left fa-lg"></i></sup>  Put your heart, mind, and soul into even your smallest acts.<br></br>
									This is the secret of success.  <sup><i className="fa fa-quote-right fa-lg"></i></sup>
								</h5>
							</div> 
						</div>
					</div>
				</div>
			</section>
    );
  }
}

export default Hello;
