import React from "react";
const ENTERKEY = 13;

export default class RenderEditingTodo extends React.Component {
  state = {
    description: this.props.todo.description || ""
  };
  handleSubmit = e => {
    e.which === ENTERKEY &&
      this.props.saveTodoDescription(this.state.description);
  };
  handleBlur = () => {
    this.props.saveTodoDescription(this.state.description);
  };
  handleChange = e => {
    this.setState({ ...this.state, description: e.target.value });
  };

  render() {
    return (
      <li id={this.props.todo.id} className="editTodoDescription">
        <textarea
          type="text"
          rows="1"
          placeholder=""
          autoFocus="true"
          value={this.state.description}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </li>
    );
  }
}
