import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props){
    super(props);
    this.setStaticData = this.setStaticData.bind(this);
    this.setDynamicData = this.setDynamicData.bind(this);
  }
  setStaticData(){
    console.log("call setStaticData() -" + this.props.static.aa);
  }
  setDynamicData(){
    console.log("call setDynamicData() -" + this.props.dynamic.name);
  }
  componentWillReceiveProps(prevProps){
    if(this.props.dynamic !== prevProps){
      this.setDynamicData();
    }
    if(this.props.static !== prevProps){
      this.setStaticData();
    }

  }

  render() {
    return (
      <div className="ChildComponent">
        ChildComponent:
        Dynamic name: <p>{this.props.dynamic.name}</p>
        Dynamic age: <p>{this.props.dynamic.age}</p>
        Dynamic year: <p>{this.props.dynamic.year}</p>
        Static aa: <p>{this.props.static.aa}</p>
        Static bb: <p>{this.props.static.bb}</p>
        Static cc: <p>{this.props.static.cc}</p>
      </div>
    );
  }
}

export default ChildComponent;
