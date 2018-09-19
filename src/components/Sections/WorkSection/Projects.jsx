import React from 'react';
import './WorkSection.scss';


class Projects extends React.Component {
  render() {
    return (
      <div className="row">
        <h3 className="text-center topics">Projects</h3>
        <div className="box4">
          <div className="middle-block" align="center">
            <a href="https://github.com/nayakrahul/" target="_blank">
              <i className="hovicon effect-3 sub-b">
                <i className="fa fa-github" aria-hidden="true"></i>
              </i>
            </a>
          </div>
        </div>  
      </div>
    );
  }
}

export default Projects;
