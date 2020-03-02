import {
  SET_GAP,
  SET_CLOSING_TIME,
  FETCH_LAST_BREAK_TIME,
  SET_LAST_BREAK_TIME
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
