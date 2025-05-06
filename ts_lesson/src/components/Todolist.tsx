import { Todo } from "../interfaces/Todo";

interface TodoListProps {
  Todos: Todo[];
  deleteTodo: (id: number) => void;
}

export default function Todolist({ todos, deleteTodo }: TodoListProps) {
  return (
    <div className='mt-4'>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className='flex items-center justify-between p-2 border-b border-gray-300'>
          <p onClick={() => deleteTodo(todo.id)}> {todo.text}</p>
        </div>
      ))}
    </div>
  );
}
