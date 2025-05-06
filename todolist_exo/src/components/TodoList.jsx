import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import OneTodo from "./OneTodo";
import EditTodo from "./EditTodo";

function TodoList() {
  const {
    todoList,
    deleteTodo,
    toggleTodo,
    toggleEditTodo,
    saveTodo,
    cancelEditTodo,
    editError,
  } = useContext(TodoContext);

  return (
    <div>
      {todoList.length ? (
        <ul>
          {todoList.map((todo) =>
            todo.edit ? (
              <EditTodo
                key={todo.id}
                todo={todo}
                saveTodo={saveTodo}
                cancelEditTodo={() => cancelEditTodo(todo.id)}
                editError={editError} // Transmission de l'erreur d'édition
              />
            ) : (
              <OneTodo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={() => toggleTodo(todo.id)}
                toggleEditTodo={() => toggleEditTodo(todo.id)}
              />
            )
          )}
        </ul>
      ) : (
        <p>Pas de todo pour le moment ...</p>
      )}
      {editError && <p className='error'>{editError}</p>}
    </div>
  );
}

export default TodoList;
