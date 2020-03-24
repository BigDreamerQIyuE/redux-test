import React from "react";
import "./index.css";

const TodoUI = props => (
  <div className="test">
    <input
      type="text"
      placeholder="write something"
      onChange={props.changeInputValue}
      value={props.inputValue}
    ></input>
    <button onClick={props.changeState}>add</button>
    <ul>
      {props.list.map((item, index) => (
        <li
          key={item}
          onClick={() => {
            props.deleteItem(index);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default TodoUI;
