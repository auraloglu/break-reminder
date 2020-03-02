import {
  SET_GAP,
  SET_CLOSING_TIME,
  FETCH_LAST_BREAK_TIME,
  SET_LAST_BREAK_TIME,
  SET_BREAK_NOTIFICATION_HEADER,
  SET_BREAK_NOTIFICATION_TEXT,
  SET_END_NOTIFICATION_HEADER,
  SET_END_NOTIFICATION_TEXT
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
    case SET_BREAK_NOTIFICATION_HEADER:
      return {
        ...state,
        breakNotificationHeader: action.payload
      };
    case SET_BREAK_NOTIFICATION_TEXT:
      return {
        ...state,
        breakNotificationText: action.payload
      };
    case SET_END_NOTIFICATION_HEADER:
      return {
        ...state,
        endNotificationHeader: action.payload
      };
    case SET_END_NOTIFICATION_TEXT:
      return {
        ...state,
        endNotificationText: action.payload
      };
    default:
      return state;
  }
};
