import PropTypes from "prop-types";
export const TodoItem = ({ id, text, complete, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => toggleTodo(id)}
        checked={complete}
      />
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>X</button>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  complete: PropTypes.bool,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
