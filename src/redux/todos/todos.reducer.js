export const todosReducer = (todos = [], action = {}) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, action.payload];
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload.id);
    case "TOGGLE_TODO":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
      });
    default:
      return todos;
  }
};
