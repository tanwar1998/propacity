import ACTIONS from "../Actions/index";

const initialState = {
  weatherData : {},
  loader: {
    display: false
  },
  isTempUnitCelcius: true
};
const data = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.Types.UPDATE_STORE_KEY: {
        var newState = JSON.parse(JSON.stringify(state));
        const data = action.payload;
        newState[data.key] = data.value;
        return newState;
    }

    default:
      return state;
  }
};

export default data;
