import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function AddTodo() {
  const { addTodo, error } = useContext(TodoContext);
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(content);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`d-flex flex-column justify-content-center align-items-center mb-20`}>
        <div>
          <input
            type='text'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Ajouter une todo'
            className='mr-15 flex-fill'
          />
          <button type='submit' className='btn btn-primary'>
            Ajouter
          </button>
        </div>
        <div>
          {error && (
            <p
              className='error-feedback'
              style={{ color: "red", marginTop: "10px" }}>
              {error}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

export default AddTodo;
