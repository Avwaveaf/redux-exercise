import { useState } from "react";
import PropTypes from "prop-types";

export const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");
  const todoInputTextHandler = ({ target }) => {
    setText(target.value);
  };
  return (
    <>
      <input type="text" onChange={todoInputTextHandler} value={text} />
      <button onClick={() => addTodo(text)}>add</button>
    </>
  );
};

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
