import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ComponentTest extends Component {

  constructor(){
    super();
    // this.dynamic= {name:1, age:2, year:3};
    this.state = {
      dynamicData: {name:1, age:2, year:3},
      staticData: {aa:2, bb:4, cc:6}
    };
    this.tick = this.tick.bind(this);
    this.tack = this.tack.bind(this);
  }

  tick() {
  var {name, age} = this.state.dynamicData;
  this.setState(prevState => ({
    dynamicData: {
    ...prevState.dynamicData,
    name: name + 1,
    age: age - 1
    }
  }))
}
  tack() {
  var {aa, cc} = this.state.staticData;
  this.setState(prevState => ({
    staticData: {
    ...prevState.staticData,
    aa: aa + 1,
    cc: cc - 1
    }
  }))
  }
componentDidMount(){
      setInterval(this.tick, 1000);
      setInterval(this.tack, 3000);
}


  render() {
    return (
      <div className="ComponentTest">
        <ChildComponent dynamic={this.state.dynamicData}
          static={this.state.staticData}/>
      </div>
    );
  }
}

export default ComponentTest;
