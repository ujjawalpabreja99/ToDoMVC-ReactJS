import React from "react";
import { IoIosArrowDown } from "react-icons/io";
export default class InputTask extends React.Component {
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.element.value);
    this.element.value = "";
  };
  render() {
    return (
      <li id="inputLI">
        <div className="checkbox-container circular-container markAllCompleted">
          <label className="checkbox-label">
            <input
              type="checkbox"
              onChange={e => this.props.markAllCompleted(e.target.checked)}
              checked={
                this.props.todosCount.activeCount === 0 &&
                this.props.todosCount.completedCount > 0
              }
            />
            <div className="arrowDown">
              <IoIosArrowDown />
            </div>
          </label>
        </div>
        <form id="taskForm" onSubmit={this.handleOnSubmit}>
          <input
            id="taskInput"
            type="text"
            placeholder="What needs to be done?"
            ref={el => (this.element = el)}
          />
        </form>
      </li>
    );
  }
}
