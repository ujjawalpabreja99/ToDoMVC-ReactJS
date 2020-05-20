import React from "react";
import FilterButton from "./Components/FilterButton";
import ActiveTodosCount from "./Components/ActiveTodosCount";
import ClearCompleted from "./Components/ClearCompleted";

export default class Footer extends React.Component {
  render() {
    return (
      <li id="buttonsLI">
        <ActiveTodosCount activeCount={this.props.todosCount.activeCount} />
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
        {this.props.todosCount.completedCount > 0 && (
          <ClearCompleted
            id="ClearCompleted"
            textContent="Clear completed"
            clearCompleted={this.props.clearCompleted}
          />
        )}
      </li>
    );
  }
}
