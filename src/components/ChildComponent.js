import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      newStaticData: +this.props.static
    };
    this.getDataChange = this.getDataChange.bind(this);
  }
  componentWillReceiveProps(){
    this.setState({newStaticData: this.state.newStaticData + 1})
    }
  getDataChange(){
    console.log(this.props.dynamic.age);
  }

  render() {
    if(this.props.dynamic){
      this.getDataChange();
    }
    return (
      <div className="ChildComponent">
        ChildComponent:
        <p>{this.props.dynamic.name}-{this.state.newStaticData}</p>
      </div>
    );
  }
}

export default ChildComponent;
