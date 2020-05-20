import React from "react";
import RenderEditingTodo from "./RenderEditingTodo";
import RenderTodo from "./RenderTodo";

export default class TodoItem extends React.Component {
  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({ ...this.state, editing: true });
  };

  handleSaveDescription = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ ...this.state, editing: false });
  };

  render() {
    if (this.state.editing !== true) {
      return (
        <RenderTodo
          {...this.props}
          handleDoubleClick={this.handleDoubleClick}
        />
      );
    } else {
      return (
        <RenderEditingTodo
          todo={this.props.todo}
          editing={this.state.editing}
          saveTodoDescription={description =>
            this.handleSaveDescription(this.props.todo.id, description)
          }
        />
      );
    }
  }
}
