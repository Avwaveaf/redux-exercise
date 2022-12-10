export const addTodoActionCreator = ({ id, text }) => {
  return {
    type: "ADD_TODO",
    payload: {
      id,
      text,
      complete: false,
    },
  };
};

export const deleteTodoActionCreator = ({ id }) => {
  return {
    type: "DELETE_TODO",
    payload: {
      id,
    },
  };
};

export const toggleTodoActionCreator = ({ id }) => {
  return {
    type: "TOGGLE_TODO",
    payload: {
      id,
    },
  };
};
