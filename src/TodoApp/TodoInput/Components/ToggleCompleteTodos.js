import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default class ToggleCompleteTodos extends React.Component {
  render() {
    return (
      <div className="checkbox-container circular-container markAllCompleted">
        <label className="checkbox-label">
          <input
            type="checkbox"
            onChange={e => this.props.toggleCompleted(e.target.checked)}
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
    );
  }
}
