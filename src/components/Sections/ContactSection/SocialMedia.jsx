import React from 'react';
import './ContactSection.scss';


class Icon extends React.Component {
	render() {
		var item = this.props.itemProp;
		return (
			<a href={item.url} className="btn btn-link" target="_blank">
				<i className={item.icon}></i>
			</a>
		);
	}
}


class SocialMedia extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      socialMedias: [
      	{
          'url': 'https:\//www.facebook.com/rahulnayak619',
          'icon': 'fa fa-facebook fa-lg'
      	},
      	{
          'url': 'https:\//instagram.com/___rahul.nayak___/',
          'icon': 'fa fa-instagram fa-lg'
      	},
      	{
          'url': 'https:\//www.linkedin.com/in/rahulnayak114',
          'icon': 'fa fa-linkedin fa-lg'
      	},
      	{
          'url': 'https:\//www.snapchat.com/add/rahul.0516',
          'icon': 'fa fa-snapchat fa-lg'
      	},
      	{
          'url': 'https:\//github.com/nayakrahul',
          'icon': 'fa fa-github fa-lg'
      	},
      	{
          'url': 'https:\//www.youtube.com/channel/UCmleuR-g0JW9a8Bz_JmX2sQ/videos',
          'icon': 'fa fa-youtube fa-lg'
      	},
      	{
          'url': 'https:\//medium.com/@booyakarahul',
          'icon': 'fa fa-medium fa-lg'
      	},
      	{
          'url': 'https:\//www.pinterest.com/booyakarahul/',
          'icon': 'fa fa-pinterest fa-lg'
      	},
      	{
          'url': 'https:\//www.quora.com/profile/Rahul-Nayak-9',
          'icon': 'fa fa-quora fa-lg'
      	},
      ],
    }
 	};

  render() {
  	var items1 = this.state.socialMedias.slice(0,5);
    var itemsList1 = items1.map((item, index) =>
	    									<li className="grow" key={index}>
													<Icon itemProp={item}/>
												</li>
											);
    var items2 = this.state.socialMedias.slice(5);
    var itemsList2 = items2.map((item, index) =>
	    									<li className="grow" key={index}>
													<Icon itemProp={item}/>
												</li>
											);
    return (
      <div className="row">
				<div className="social-icons text-center">	
					<div>
						<ul className="list-inline list-social">
							{itemsList1}
						</ul>
					</div>
					<div>
						<ul className="list-inline list-social">
							{itemsList2}
						</ul>
					</div>
				</div>
			</div>
    );
  }
}

export default SocialMedia;
