import React from 'react';
import './WorkSection.scss';


class Blogs extends React.Component {
  render() {
    return (
      <div className="row">
        <nav className="blogs animated animatedFadeInUp fadeInUp" style={{animationDelay: '0.5s'}}>
          <a href="https://medium.com/@booyakarahul" target="_blank" data-hover="Blogs">
            <span>Blogs</span>
          </a>
        </nav>
      </div>
    );
  }
}

export default Blogs;
