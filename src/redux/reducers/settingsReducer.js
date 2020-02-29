import {
  SET_GAP,
  SET_CLOSING_TIME,
  FETCH_LAST_BREAK_TIME,
  SET_LAST_BREAK_TIME
} from "../actions/types/settingsTypes";

export default (state = [], action) => {
  switch (action.type) {
    case SET_GAP:
      return { ...state, gap: action.payload };
    case SET_CLOSING_TIME:
      return {
        ...state,
        closingTime: action.payload
      };
    case FETCH_LAST_BREAK_TIME:
      return {
        ...state,
        lastBreakTime: action.payload
      };
    case SET_LAST_BREAK_TIME:
      return {
        ...state,
        lastBreakTime: action.payload
      };
    default:
      return state;
  }
};
