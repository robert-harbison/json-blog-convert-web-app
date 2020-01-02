/**
 * Represents the main redux store for the web-app.
 */
import { createStore } from "redux";
import mainReducer from "./Reducer";
import RichTextEditor from "react-rte";

/**
 * Initial Redux state.
 */
export const initialState = {
  postID: "",
  postTitle: "",
  postAuthor: "",
  postDate: "",
  postContent: RichTextEditor.createEmptyValue().toString("html")
};

export const store = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
