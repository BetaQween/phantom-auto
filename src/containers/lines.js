import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDynamicData } from '../actions/index';

class Lines extends Component {
  componentDidMount(){
    this.props.getDynamicData()
  }

  // createDynamicData(){
  //   return this.props.dynamicData.map((data) => {
  //     return (
  //       <li
  //         key={data.id}
  //         onClick={() => this.props.getDynamicData(data)} //call function from "actions"
  //         >
  //         {data.name}-{data.age}
  //       </li>
  //     )
  //   });
  // }
  render() {
    return (
      <div>
        <ul>
         { this.createDynamicData() }
        </ul>
      </div>
    );
  }
}
//data from reducer(CarReducer) add to this.props.dynamicData (our class)
  function mapStateToProps(state){
    return {
      dynamicData: state.activeCar //from allReducers = combineReducers({dynamicData: CarReducer});
    };
  }
// function getDynamicData from actions/index add to this.props.getDynamicData(car) (our class)
  function matchDispatchToProps(dispatch){
    return bindActionCreators({getDynamicData: getDynamicData}, dispatch)
  }
//connect reducer & action with our class
export default connect(mapStateToProps, matchDispatchToProps)(Lines);
