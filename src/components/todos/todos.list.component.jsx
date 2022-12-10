import { useDispatch, useSelector } from "react-redux";
import {
  addTodoActionCreator,
  deleteTodoActionCreator,
  toggleTodoActionCreator,
} from "../../redux/todos/todos.action";
import { TodoInput } from "./todos.input.component";
import { TodoItem } from "./todos.item.component";
export const TodoList = () => {
  const todos = useSelector((state) => state.todos); // TODO: Get todos from store;
  const dispatch = useDispatch();
  function onAddTodo(text) {
    // TODO: dispatch action ADD_TODO
    const id = `todo-${new Date()}`;
    dispatch(addTodoActionCreator({ id, text }));
  }

  function onToggleTodo(id) {
    // TODO: dispatch action TOGGLE_TODO
    dispatch(toggleTodoActionCreator({ id }));
  }

  function onDeleteTodo(id) {
    // TODO: dispatch action DELETE_TODO
    dispatch(deleteTodoActionCreator({ id }));
  }

  return (
    <div>
      <h3>My Todos</h3>
      <TodoInput addTodo={onAddTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              {...todo}
              toggleTodo={onToggleTodo}
              deleteTodo={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
