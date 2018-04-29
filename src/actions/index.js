
export const selectCar = (car) => {
  console.log("You clicked on car: ", car.name);
  return {
    type: "CAR_SELECTED",
    payload: car
  }
}
// export const getDynamicData = () => {
//   axios.get("http://localhost:3000/dynamicData")
//   .then((res) => {
//     console.log(res);
//   });
//   return {
//     type: "GET_DYNAMIC-DATA",
//     payload: res
//   }
// }
