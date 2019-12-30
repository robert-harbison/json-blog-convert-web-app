import {
  SET_POST_ID,
  SET_POST_TITLE,
  SET_POST_AUTHOR,
  SET_POST_DATE,
  SET_POST_CONTENT
} from "./ActionTypes";

export const setPostID = id => {
  return {
    type: SET_POST_ID,
    id: id
  };
};

export const setPostTitle = title => {
  return {
    type: SET_POST_TITLE,
    title: title
  };
};

export const setPostAuthor = author => {
  return {
    type: SET_POST_AUTHOR,
    author: author
  };
};

export const setPostDate = date => {
  return {
    type: SET_POST_DATE,
    date: date
  };
};

export const setPostContent = content => {
  return {
    type: SET_POST_CONTENT,
    content: content
  };
};
