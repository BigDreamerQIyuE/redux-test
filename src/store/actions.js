import { DELETE_ITEM, ADD_ITEM, CHANGE_INPUT_VALUE } from "./actionTypes";

const addItem = () => ({
  type: ADD_ITEM
});

const deleteItem = index => ({
  type: DELETE_ITEM,
  index: index
});

const changeInputValue = value => ({
  type: CHANGE_INPUT_VALUE,
  value: value
});

export { addItem, deleteItem, changeInputValue };
