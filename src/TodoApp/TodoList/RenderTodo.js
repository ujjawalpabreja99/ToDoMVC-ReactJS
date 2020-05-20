import React from "react";
import ArchiveCheckbox from "./Components/ArchiveCheckbox";
import CompleteCheckbox from "./Components/CompleteCheckbox";
import DeleteButton from "./Components/DeleteButton";
import Description from "./Components/Description";

export default class RenderTodo extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <li id={todo.id}>
        <CompleteCheckbox todo={todo} toggleTodo={this.props.toggleTodo} />
        <Description
          todo={todo}
          handleDoubleClick={this.props.handleDoubleClick}
        />
        <ArchiveCheckbox todo={todo} archiveTodo={this.props.archiveTodo} />
        <DeleteButton todo={todo} deleteTodo={this.props.deleteTodo} />
      </li>
    );
  }
}
