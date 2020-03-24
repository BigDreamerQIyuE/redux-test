import { DELETE_ITEM, ADD_ITEM, CHANGE_INPUT_VALUE } from "./actionTypes";

const defaultState = {
  inputValue: "",
  list: ["fuck1", "fuck2", "fuck3"]
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ADD_ITEM:
      newState.list.push(newState.inputValue);
      newState.inputValue = "";
      break;
    case CHANGE_INPUT_VALUE:
      newState.inputValue = action.value;
      break;
    case DELETE_ITEM:
      newState.list.splice(action.index, 1);
      break;
    default:
      break;
  }
  return newState;
};
