import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../features/todo/todoSlice";

const AddTodo = ({
  isEditing,
  input,
  setInput,
  editTodoId,
  setIsEditing,
  setEditTodoId,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update the todo
      dispatch(editTodo({ id: editTodoId, newText: input }));
      setIsEditing(false);
      setEditTodoId(null);
    } else {
      // Add a new todo
      dispatch(addTodo(input));
    }
    setInput("");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setInput("");
    setEditTodoId(null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center pt-6">
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder={isEditing ? "Edit your todo..." : "Enter your todo..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border w-80 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className={`${
            isEditing
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded-lg transition`}
        >
          {isEditing ? "Update" : "Add"}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default AddTodo;
