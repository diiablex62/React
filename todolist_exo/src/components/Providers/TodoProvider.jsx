import { useState } from "react";
import { TodoContext } from "../../context/TodoContext";

export default function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");
  const [editError, setEditError] = useState("");

  const addTodo = (content) => {
    const contentNorm = content.trim().toLowerCase();
    const duplicate = todoList.find(
      (todo) => todo.content.trim().toLowerCase() === contentNorm
    );
    if (duplicate) {
      setError("Cette todo existe déjà.");
      return;
    }
    setError("");
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
    };
    setTodoList([...todoList, todo]);
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const toggleEditTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, edit: !todo.edit } : todo
      )
    );
    setEditError("");
  };

  const saveTodo = (id, content) => {
    const contentNorm = content.trim().toLowerCase();
    const duplicate = todoList.find(
      (todo) =>
        todo.id !== id && todo.content.trim().toLowerCase() === contentNorm
    );
    if (duplicate) {
      setEditError("Cette todo existe déjà.");
      return;
    }
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, content, edit: false } : todo
      )
    );
    setEditError("");
  };

  const cancelEditTodo = (id) => {
    setTodoList(
      todoList.map((todo) => (todo.id === id ? { ...todo, edit: false } : todo))
    );
    setEditError("");
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        error,
        editError,
        addTodo,
        deleteTodo,
        toggleTodo,
        toggleEditTodo,
        saveTodo,
        cancelEditTodo,
      }}>
      {children}
    </TodoContext.Provider>
  );
}
