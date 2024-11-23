import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import { useState } from "react";
function App() {
  const [input, setInput] = useState(""); // Todo input state
  const [isEditing, setIsEditing] = useState(false); // Track if editing
  const [editTodoId, setEditTodoId] = useState(null);
  return (
    <div className="app mt-0">
      <AddTodo
        input={input}
        setInput={setInput}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editTodoId={editTodoId}
        setEditTodoId={setEditTodoId}
      />
      <ListTodo
        setInput={setInput}
        setIsEditing={setIsEditing}
        setEditTodoId={setEditTodoId}
      />
    </div>
  );
}

export default App;
