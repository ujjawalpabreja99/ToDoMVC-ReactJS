import React from "react";
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";
import EditTodoDescription from "./EditTodoDescription";
import ArchiveCheckbox from "./ArchiveCheckbox";
import GetTodoDescription from "./GetTodoDescription";

export default class TodoItem extends React.Component {
  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ ...this.state, editing: false });
  };

  render() {
    const todo = this.props.todo;

    let TodoElement;
    if (this.state.editing !== true) {
      TodoElement = (
        <li id={todo.id}>
          <Checkbox todo={todo} onChange={this.props.toggleTodo} />
          {GetTodoDescription(todo, this.handleDoubleClick)}
          <ArchiveCheckbox todo={todo} onChange={this.props.archiveTodo} />
          <DeleteButton todo={todo} onClick={this.props.deleteTodo} />
        </li>
      );
    } else {
      TodoElement = (
        <li id={todo.id}>
          <Checkbox todo={todo} onChange={this.props.toggleTodo} />
          <EditTodoDescription
            description={todo.description}
            editing={this.state.editing}
            updateTodoDescription={description =>
              this.handleSave(todo.id, description)
            }
            placeholder=""
          />
        </li>
      );
    }
    return TodoElement;
  }
}
