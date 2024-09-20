const initialState = 0;
const upDown = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return state + 5;
    case "Decrement":
      return state - 1;

    default:
      return state;
  }
};

export default upDown;
