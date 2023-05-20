import React from 'react';
import './index.css';

class Squares extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: 'red',
      color2: 'blue'
    };
  }

  swapColors = () => {
    const { color1, color2 } = this.state;
    this.setState({
      color1: color2,
      color2: color1
    });
  };

  render() {
    const { color1, color2 } = this.state;

    return (
      <div className="container">
        <div
          className="square"
          style={{ backgroundColor: color1 }}
          onClick={this.swapColors}
        ></div>
        <div
          className="square"
          style={{ backgroundColor: color2 }}
          onClick={this.swapColors}
        ></div>
      </div>
    );
  }
}

export default Squares;