import React from "react";

export default class FilterButton extends React.Component {
  render() {
    return (
      <button
        id={this.props.id}
        onClick={e => this.props.switchFilter(e.target.id)}
      >
        {this.props.textContent}
      </button>
    );
  }
}
