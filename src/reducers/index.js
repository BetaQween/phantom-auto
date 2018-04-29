import { combineReducers } from 'redux';
import CarReducer from './reducer-car';
import ActiveCarReducer from './reducer-active-car';

//storage all reducers
const allReducers = combineReducers({
  cars: CarReducer,
  activeCar: ActiveCarReducer
});
export default allReducers;
