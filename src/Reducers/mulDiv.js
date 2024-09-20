
const initialState = {
  multi: 5,
};
const mulDivReducer = (state = initialState, action) => {
  switch (action.type) {
      case "Divide":
        return  { multi: state.multi / action.payload }; 
      case "Multiply":
          return { multi: state.multi * 5 };
    default:
      return state;
  }
};

export default mulDivReducer;
