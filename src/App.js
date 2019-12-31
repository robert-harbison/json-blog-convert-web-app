import React from "react";
import EditorField from "./components/Fields/EditorField";
import ResultField from "./components/Fields/ResultField";

import IncludeableField from "./components/Fields/IncludeableField";
import DateField from "./components/Fields/DateField";

import {
  setPostID,
  setPostTitle,
  setPostAuthor,
  setPostDate,
  setPostContent
} from "./redux/Actions";
import { useDispatch } from "react-redux";

let dispatch;

function onPostIDChange(value) {
  dispatch(setPostID(value));
}

function onPostTitleChange(value) {
  dispatch(setPostTitle(value));
}

function onPostAuthorChange(value) {
  dispatch(setPostAuthor(value));
}

function onPostDateChange(value) {
  dispatch(setPostDate(value));
}

function onPostContentChange(value) {
  dispatch(setPostContent(value));
}

function App() {
  dispatch = useDispatch();

  return (
    <div className="App">
      <IncludeableField
        ontextchange={onPostIDChange}
        fieldname="post-id"
        placeholder="Post ID"
      ></IncludeableField>

      <IncludeableField
        ontextchange={onPostTitleChange}
        fieldname="post-title"
        placeholder="Post Title"
      ></IncludeableField>

      <IncludeableField
        ontextchange={onPostAuthorChange}
        fieldname="author"
        placeholder="Author"
      ></IncludeableField>

      <DateField
        ontextchange={onPostDateChange}
        fieldname="date-written"
        placeholder="Date Written"
      ></DateField>

      {/* TODO: CHoice between html and markup */}

      <EditorField onChange={onPostContentChange} />
      <ResultField />
    </div>
  );
}

export default App;
