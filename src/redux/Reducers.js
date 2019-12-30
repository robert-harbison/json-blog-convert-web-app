import {
  SET_POST_ID,
  SET_POST_TITLE,
  SET_POST_AUTHOR,
  SET_POST_DATE,
  SET_POST_CONTENT
} from "./ActionTypes";
import { combineReducers } from "redux";

const initialState = {
  postID: "",
  postTitle: "",
  postAuthor: "",
  postDate: "",
  postContent: ""
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST_ID:
      return Object.assign({}, state, {
        postID: action.id
      });
    case SET_POST_TITLE:
      return Object.assign({}, state, {
        postTitle: action.title
      });
    case SET_POST_AUTHOR:
      return Object.assign({}, state, {
        postAuthor: action.author
      });
    case SET_POST_DATE:
      return Object.assign({}, state, {
        postDate: action.date
      });
    case SET_POST_CONTENT:
      return Object.assign({}, state, {
        postContent: action.content
      });
    default:
      return state;
  }
};

const allReducers = combineReducers({
  data: dataReducer
});

export default allReducers;
