import React from "react";
import FilterButton from "./FilterButton";
import ActiveTasksCount from "./ActiveTasksCount";
import ClearCompletedButton from "./ClearCompletedButton";

export default class Footer extends React.Component {
  render() {
    return (
      <li id="buttonsLI">
        <ActiveTasksCount activeCount={this.props.activeCount} />
        <div>
          <FilterButton
            id="All"
            textContent="All"
            switchFilter={this.props.switchFilter}
          />
          <FilterButton
            id="Active"
            textContent="Active"
            switchFilter={this.props.switchFilter}
          />
          <FilterButton
            id="Completed"
            textContent="Completed"
            switchFilter={this.props.switchFilter}
          />
          <FilterButton
            id="Archived"
            textContent="Archived"
            switchFilter={this.props.switchFilter}
          />
        </div>
        {this.props.completedCount > 0 && (
          <ClearCompletedButton
            id="ClearCompleted"
            textContent="Clear Completed"
            clearCompleted={this.props.clearCompleted}
          />
        )}
      </li>
    );
  }
}
