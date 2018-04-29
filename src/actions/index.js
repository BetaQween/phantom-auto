import axios from "axios";

export const selectCar = (car) => {
  console.log("You clicked on car: ", car.name);
  return {
    type: "CAR_SELECTED",
    payload: car
  }
}
export const getDynamicData = () => dispatch => {
  let result = [];
  axios.get("http://localhost:3000/dynamicData")
  .then((res) => {
    result = res;
    console.log(res);
  });
  dispatch({
    type: "GET_DYNAMIC_DATA",
    payload: result
  })
}
