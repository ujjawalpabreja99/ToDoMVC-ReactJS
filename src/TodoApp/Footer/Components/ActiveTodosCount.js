import React from "react";

export default class ActiveTodosCount extends React.Component {
  render() {
    return (
      <label id="activeCount">
        {this.props.activeCount}
        {this.props.activeCount === 1 && " task left"}
        {this.props.activeCount !== 1 && " tasks left"}
      </label>
    );
  }
}
