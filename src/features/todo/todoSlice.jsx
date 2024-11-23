import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  name: "todos",
  todos: [{ id: 1, text: "test todo" }],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todos = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todos);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload; // Destructure id and newText from the payload
      const todo = state.todos.find((todo) => todo.id === id); // Find the todo with the given id
      if (todo) {
        todo.text = newText; // If found, update the text property of the todo
      }
    },
  },
});
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
