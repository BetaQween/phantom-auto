import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCar } from '../actions/index';

class CarsList extends Component {

  createListCars(){
    return this.props.cars.map((car) => {
      return (
        <li
          key={car.id}
          onClick={() => this.props.selectCar(car)} //call function from "actions"
          >
          {car.name}-{car.age}
        </li>
      )
    });
  }
  render() {
    return (
      <div>
        <ul>
         { this.createListCars() }
        </ul>
      </div>
    );
  }
}
//data from reducer(CarReducer) add to this.props.cars (our class)
  function mapStateToProps(state){
    return {
      cars: state.cars //from allReducers = combineReducers({cars: CarReducer});
    };
  }
// function selectCar from actions/index add to this.props.selectCar(car) (our class)
  function matchDispatchToProps(dispatch){
    return bindActionCreators({selectCar: selectCar}, dispatch)
  }
//connect reducer & action with our class
export default connect(mapStateToProps, matchDispatchToProps)(CarsList);
