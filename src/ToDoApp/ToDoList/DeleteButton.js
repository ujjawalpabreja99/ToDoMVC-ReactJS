import React from "react";
import { IoIosClose } from "react-icons/io";
export default class DeleteButton extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <button
        className="deleteButton"
        onClick={() => this.props.onClick(todo.id)}
      >
        <IoIosClose className="delete" />
      </button>
    );
  }
}
