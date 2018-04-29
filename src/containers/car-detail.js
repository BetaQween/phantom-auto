import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarDetail extends Component {
  render(){
    return(
      <div>
        <h3>Name: {this.props.car.name}</h3>
        <p>Age: {this.props.car.age}</p>
      </div>
    );
  }
}
//data from reducer(ActiveCarReducer) add to this.props.car(our class)
function mapStateToProps(state){
  return {
    car: state.activeCar //from allReducers = combineReducers({activeCar: ActiveCarReducer});
  }
}

export default connect(mapStateToProps)(CarDetail);
