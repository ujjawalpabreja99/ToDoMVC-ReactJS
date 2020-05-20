import React from "react";
export default function getTodoDescription(todo, handleDoubleClick) {
  let todoDescription;
  if (todo.status === "Completed") {
    todoDescription = (
      <label onDoubleClick={handleDoubleClick}>
        <s>{todo.description}</s>
      </label>
    );
  } else {
    todoDescription = (
      <label onDoubleClick={handleDoubleClick}>{todo.description}</label>
    );
  }
  return todoDescription;
}
