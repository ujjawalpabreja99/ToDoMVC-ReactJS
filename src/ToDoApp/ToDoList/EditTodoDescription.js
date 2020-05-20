import React from "react";

export default class TodoInput extends React.Component {
  state = {
    description: this.props.description || ""
  };
  render() {
    return (
      <textarea
        type="text"
        rows="1"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.description}
        onBlur={() => this.props.updateTodoDescription(this.state.description)}
        onChange={e => this.setState({ description: e.target.value })}
        onKeyDown={e =>
          e.which === 13 &&
          this.props.updateTodoDescription(this.state.description)
        }
      />
    );
  }
}
