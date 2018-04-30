import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ComponentTest extends Component {

  constructor(){
    super();
    this.state = {
      dynamicData: {name:1, age:2, year:3},
      staticData: 22
    };
    this.tick = this.tick.bind(this);
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
componentDidMount(){
      setInterval(this.tick, 1000);
}


  render() {
    return (
      <div className="ComponentTest">
        {/* <p>{this.state.dynamicData.name}</p>
        <p>{this.state.dynamicData.age}</p>
        <p>{this.state.dynamicData.year}</p> */}
        <ChildComponent dynamic={this.state.dynamicData} static={this.state.staticData}/>
      </div>
    );
  }
}

export default ComponentTest;
