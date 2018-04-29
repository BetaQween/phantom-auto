import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ComponentTest extends Component {
  constructor(){
    super();
    this.state = {
      data: new Date().toLocaleTimeString(),
      staticData: 22
    };
    this.tick = this.tick.bind(this);
  }
  tick() {
  const element = new Date().toLocaleTimeString();
  this.setState({data: element});
  }
componentDidMount(){
  setInterval(this.tick, 1000);
}


  render() {
    return (
      <div className="ComponentTest">
        {/* <p>{this.state.data}</p> */}
        <ChildComponent items={this.state.data} static={this.state.staticData}/>
      </div>
    );
  }
}

export default ComponentTest;
