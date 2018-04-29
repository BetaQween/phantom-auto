export default function(state={}, action){
  switch (action.type) {
    case "CAR_SELECTED":
      return action.payload
      break;
  }
  return state;
}
