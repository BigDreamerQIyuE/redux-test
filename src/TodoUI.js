import React from "react";
import "./index.css";
import { connect } from "react-redux";
import { addItem, deleteItem, changeInputValue } from "./store/actions";

const TodoUI = props => {
  let { changeInputValue, inputValue, addItem, list, deleteItem } = props;
  return (
    <div className="test">
      <input
        type="text"
        placeholder="write something"
        onChange={changeInputValue}
        value={inputValue}
      ></input>
      <button onClick={addItem}>add</button>
      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              deleteItem(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const stateToProps = state => ({
  inputValue: state.inputValue,
  list: state.list
});

const dispatchtoProps = dispatch => ({
  addItem: () => dispatch(addItem()),
  changeInputValue: e => dispatch(changeInputValue(e.target.value)),
  deleteItem: index => dispatch(deleteItem(index))
});

export default connect(stateToProps, dispatchtoProps)(TodoUI);