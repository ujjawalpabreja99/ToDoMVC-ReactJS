import React, { useState } from "react";
import Footer from "./Footer/index";
import InputTask from "./InputTask/index";
import ToDoList from "./ToDoList/TodoList";

const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

export default function ToDoApp() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("All");

  const addTodo = text => {
    const todo = {
      id: Date.now(),
      description: text,
      status: "Active"
    };
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const editTodo = (id, editedDescription) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, description: editedDescription } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleTodo = id => {
    console.log("toggle", id);
    const updatedTodos = todos.map(todo =>
      todo.id === id
        ? { ...todo, status: todo.status === "Active" ? "Completed" : "Active" }
        : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const archiveTodo = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id
        ? {
            ...todo,
            status: todo.status === "Archived" ? "Active" : "Archived"
          }
        : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  const switchFilter = filter => {
    setFilter(filter);
  };

  const getActiveCount = () => {
    let activeCount = 0;
    todos.forEach(todo => (activeCount += todo.status === "Active"));
    return activeCount;
  };

  const getCompletedCount = () => {
    let completedCount = 0;
    todos.forEach(todo => (completedCount += todo.status === "Completed"));
    return completedCount;
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter(todo => todo.status !== "Completed");
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  const filterTodos = () => {
    switch (filter) {
      case "All":
        return todos.filter(todo => todo.status !== "Archived");
      case "Active":
        return todos.filter(todo => todo.status === "Active");
      case "Completed":
        return todos.filter(todo => todo.status === "Completed");
      case "Archived":
        return todos.filter(todo => todo.status === "Archived");
      default:
        throw new Error("Unknown filter: " + filter);
    }
  };

  return (
    <div id="ToDoMVC">
      <InputTask addTodo={addTodo} />
      <ToDoList
        todos={filterTodos()}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleTodo={toggleTodo}
        archiveTodo={archiveTodo}
      />
      <Footer
        switchFilter={switchFilter}
        activeCount={getActiveCount()}
        completedCount={getCompletedCount()}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}
