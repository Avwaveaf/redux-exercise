import PropTypes from "prop-types";
export const GoalItem = ({ id, text, deleteGoal }) => {
  return (
    <div>
      <span>{text}</span>
      <button onClick={() => deleteGoal(id)}>X</button>
    </div>
  );
};

GoalItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  deleteGoal: PropTypes.func.isRequired,
};
