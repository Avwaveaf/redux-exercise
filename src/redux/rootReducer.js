import { goalsReducer } from "./goals/goals.reducer";
import { todosReducer } from "./todos/todos.reducer";

export const rootReducer = (state = {}, action = {}) => {
  return {
    todos: todosReducer,
    goals: goalsReducer,
  };
};
