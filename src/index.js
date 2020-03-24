import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoUI from "./TodoUI";
import { addItem, deleteItem, changeInputValue } from "./store/actions";
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(this.state);
    store.subscribe(this.storeChange);
  }

  storeChange = () => {
    this.setState(store.getState);
  };

  addItem = () => {
    const action = addItem();
    store.dispatch(action);
  };

  changeInputValue = e => {
    const action = changeInputValue(e.target.value);
    store.dispatch(action);
  };

  deleteItem = index => {
    const action = deleteItem(index);
    store.dispatch(action);
  };

  render() {
    return (
      <TodoUI
        changeState={this.addItem}
        changeInputValue={this.changeInputValue}
        deleteItem={this.deleteItem}
        list={this.state.list}
        inputValue={this.state.inputValue}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
