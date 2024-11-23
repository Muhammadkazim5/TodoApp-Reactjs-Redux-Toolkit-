import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const TodoList = ({ setInput, setIsEditing, setEditTodoId }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setEditTodoId(todo.id);
    setInput(todo.text); // Pre-fill the input field with the current text
  };

  return (
    <ul className="list-none px-60">
      {todos.map((todo) => (
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 p-4 rounded-lg shadow"
          key={todo.id}
        >
          <span className="flex-1 text-white">{todo.text}</span>
          <div className="space-x-2">
            <button
              className="bg-blue-500 px-3 py-1 text-white rounded-md"
              onClick={() => handleEditClick(todo)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 px-3 py-1 text-white rounded-md"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
