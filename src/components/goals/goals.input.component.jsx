import { useState } from "react";
import PropTypes from "prop-types";

export const GoalInput = ({ addGoal }) => {
  const [text, setText] = useState("");
  const goalsInputTextHandler = ({ target }) => {
    setText(target.value);
  };
  return (
    <>
      <input type="text" onChange={goalsInputTextHandler} value={text} />
      <button onClick={() => addGoal(text)}>Add</button>
    </>
  );
};

GoalInput.propTypes = {
  addGoal: PropTypes.func.isRequired,
};
