import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   items: this.props.items
    // };
    this.getDataChange = this.getDataChange.bind(this);
  }
  getDataChange(){
    console.log(this.props.items);
  }

  render() {
    if(this.props.items){
      this.getDataChange();
    } 
    return (
      <div className="ChildComponent">
        ChildComponent:
        <p>{this.props.items}</p>
      </div>
    );
  }
}

export default ChildComponent;
