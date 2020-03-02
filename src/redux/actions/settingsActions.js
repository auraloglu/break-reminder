import {
  SET_GAP,
  SET_CLOSING_TIME,
  FETCH_LAST_BREAK_TIME,
  SET_LAST_BREAK_TIME,
  SET_BREAK_NOTIFICATION_HEADER,
  SET_BREAK_NOTIFICATION_TEXT,
  SET_END_NOTIFICATION_HEADER,
  SET_END_NOTIFICATION_TEXT
} from "./types/settingsTypes";

export const setGap = gap => async dispatch => {
  dispatch({ type: SET_GAP, payload: gap });
};

export const setClosingTime = closingTime => async dispatch => {
  window.localStorage.setItem("closingTime", closingTime);
  dispatch({ type: SET_CLOSING_TIME, payload: closingTime });
};

export const fetchLastBreak = () => async dispatch => {
  dispatch({
    type: FETCH_LAST_BREAK_TIME,
    payload: window.localStorage.getItem("lastBreaktTime")
  });
};

export const setLastBreak = () => async dispatch => {
  window.localStorage.setItem("lastBreaktTime", Date.now().toString());

  dispatch({ type: SET_LAST_BREAK_TIME, payload: Date.now().toString() });
};

export const setBreakNotificationHeader = header => async dispatch => {
  window.localStorage.setItem("breakNotificationHeader", header);

  dispatch({ type: SET_BREAK_NOTIFICATION_HEADER, payload: header });
};
export const setBreakNotificationText = text => async dispatch => {
  window.localStorage.setItem("breakNotificationText", text);

  dispatch({ type: SET_BREAK_NOTIFICATION_TEXT, payload: text });
};
export const setEndNotificationHeader = header => async dispatch => {
  window.localStorage.setItem("endNotificationHeader", header);

  dispatch({ type: SET_END_NOTIFICATION_HEADER, payload: header });
};
export const setEndNotificationText = text => async dispatch => {
  window.localStorage.setItem("endNotificationText", text);

  dispatch({ type: SET_END_NOTIFICATION_TEXT, payload: text });
};
