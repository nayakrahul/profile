import React from 'react';
import Bars from './Bars.jsx';
import './Loader.scss';


class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const height = document.getElementById('app').clientHeight;
    this.setState({loaderStyle: {minHeight: height}});
  }

  render() {
    return (
      <div id="loader-wrapper" style={this.state.loaderStyle}>
        <div className="box5"><Bars/></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    );
  }
}

export default Loader;
