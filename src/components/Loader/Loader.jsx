import React from 'react';
import Bars from './Bars.jsx';
import './Loader.scss';


class Loader extends React.Component {
  render() {
    return (
      <div id="loader-wrapper">
        <div className="box5"><Bars/></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    );
  }
}

export default Loader;
