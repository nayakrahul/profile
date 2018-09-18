import React from 'react';
import './Loader.scss';


class Bars extends React.Component {
  render() {
    var elements = [];
    for(var i = 0; i < 10; i++) {
      elements.push(<div className="bar" key={i}></div>);
    }
    return (
      <div id="bars">
        {elements}
        <h6>WELCOME</h6>
      </div>
    );
  }
}

export default Bars;
