const defaultState = {
    text: "f",
};

export const inputReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};