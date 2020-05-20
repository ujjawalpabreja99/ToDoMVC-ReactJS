import React from "react";

export default class ClearCompletedButton extends React.Component {
  render() {
    return (
      <button id={this.props.id} onClick={() => this.props.clearCompleted()}>
        {this.props.textContent}
      </button>
    );
  }
}
