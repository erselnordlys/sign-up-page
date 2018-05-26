import { SAVE_STATE } from "../constants/action-types";
const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_STATE:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export default rootReducer;