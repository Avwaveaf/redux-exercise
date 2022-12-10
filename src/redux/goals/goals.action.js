export const addGoalCreator = ({ id, text }) => {
  return {
    type: "ADD_GOAL",
    payload: {
      id,
      text,
    },
  };
};
export const deleteGoalCreator = ({ id }) => {
  return {
    type: "DELETE_GOAL",
    payload: {
      id,
    },
  };
};
