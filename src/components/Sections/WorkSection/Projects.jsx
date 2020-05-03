import React from 'react';
import './WorkSection.scss';


class Projects extends React.Component {
  render() {
    return (
      <div className="row">
        <nav className="projects animated animatedFadeInUp fadeInUp" style={{animationDelay: '0.2s'}}>
          <a href="https://github.com/nayakrahul" target="_blank" data-hover="Projects">
            <span>Projects</span>
          </a>
        </nav>
      </div>
    );
  }
}

export default Projects;
