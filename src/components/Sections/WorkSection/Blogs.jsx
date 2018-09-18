import React from 'react';
import './WorkSection.scss';


class Blogs extends React.Component {
	render() {
		return (
			<div className="row">
				<h3 className="text-center topics">Blogs</h3>
				<div className="box4">
					<div className="middle-block" align="center">
						<a href="https://rahuliitk.quora.com" target="_blank">
							<i className="hovicon effect-3 sub-b">
								<i className="fa fa-quora" aria-hidden="true"></i>
							</i>
						</a>
					</div>
				</div>	
			</div>
		);
	}
}

export default Blogs;
