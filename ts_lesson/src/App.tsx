import { useState } from "react";
import "./App.css";
import { Todo } from "./interfaces/Todo";
import Todolist from "./components/Todolist";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Faire du yoga", done: true },
    { id: 2, text: "Faire du sport", done: false },
  ]);

  const [newTodo, setNewTodoText] = useState<string>("");

  const addTodo = () :void => {
    const newtodo: Todo = {
      id: Date.now(),
      text: newTodo,
      done: false,
    };
    setTodos([...todos, newtodo]);
    setNewTodoText("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
    <h1 className="text-2xl font-bold text-center mb-4">Ma Todo List</h1>
    <div className="flex">
      <input
        type="text"
        className="flex-grow border border-gray-300 rounded-l px-2 py-1 focus:outline-none"
        placeholder="Ajouter une tâche"
        value={newTodo}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button
        onClick={addTodo}
        className="bg-blue-500 text-white rounded-r px-4 py-1 hover:bg-blue-600 cursor-pointer"
      >
        Ajouter
      </button>
    </div>
    <Todolist todos={todos} deleteTodo={deleteTodo}></Todolist>
  </div>
  );


}

export default App;
