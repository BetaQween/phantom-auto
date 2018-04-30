import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ComponentTest extends Component {

  constructor(){
    super();
    // this.state = {
    //   dynamicData: {name:1, age:2, year:3},
    //   staticData: 22
    // };
    this.dynamicData = {a:1, b:2, c:3};
    this.staticData = {aa:0, bb:1, cc:2};
    this.tick = this.tick.bind(this);
  }

  tick() {
  //   this.dynamicData.a++;
  // var {name, age} = this.state.dynamicData;
  // this.setState(prevState => ({
  //   dynamicData: {
  //   ...prevState.dynamicData,
  //   name: name + 1,
  //   age: age - 1
  //   }
  // }))
  }
componentWillReceiveProps(){
  this.staticData.aa
      setInterval(this.child.setStaticData(), 1000);
      setInterval(this.child.setDynamicData(), 2000);
}


  render() {
    return (
      <div className="ComponentTest">
        {/* <p>{this.dynamicData.a}</p>
        <p>{this.staticData.aa}</p> */}
        {/* <p>{this.state.dynamicData.name}</p>
        <p>{this.state.dynamicData.age}</p>
        <p>{this.state.dynamicData.year}</p> */}
        {/* <ChildComponent dynamic={this.state.dynamicData} static={this.state.staticData}/> */}
        <ChildComponent
           dynamic={this.dynamicData}
           static={this.staticData}
           ref={instance => {this.child = instance}}
         />
      </div>
    );
  }
}

export default ComponentTest;
