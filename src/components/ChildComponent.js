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
    console.log(this.props.items);
  }

  render() {
    if(this.props.items){
      this.getDataChange();
    }
    return (
      <div className="ChildComponent">
        ChildComponent:
        <p>{this.props.items}-{this.state.newStaticData}</p>
      </div>
    );
  }
}

export default ChildComponent;
