/**
 * Represents the main data store for the web-app.
 */
import { createStore } from "redux";
import allReducer from "./Reducers";
import { initialState } from "./Reducers";

export const store = createStore(
  allReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
