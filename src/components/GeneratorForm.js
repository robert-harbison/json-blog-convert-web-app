import React from "react";

import EditorField from "./Fields/EditorField";
import ResultField from "./Fields/ResultField";

import styled from "styled-components";

import IncludeableField from "./Fields/IncludeableField";
import DateField from "./Fields/DateField";

import {
  setPostID,
  setPostTitle,
  setPostAuthor,
  setPostDate,
  setPostContent
} from "../redux/Actions";

import { useDispatch } from "react-redux";

let dispatch;

export default function GeneratorForm(props) {
  dispatch = useDispatch();

  return (
    <StyledForm className={props.className}>
      <StyledIncludeableField
        // onChange={onPostIDChange}
        onChange={value => {
          dispatch(setPostID(value));
        }}
        name="post-id"
        placeholder="Post ID"
      ></StyledIncludeableField>

      <StyledIncludeableField
        // onChange={onPostTitleChange}
        onChange={value => {
          dispatch(setPostTitle(value));
        }}
        name="post-title"
        placeholder="Post Title"
      ></StyledIncludeableField>

      <StyledIncludeableField
        // onChange={onPostAuthorChange}
        onChange={value => {
          dispatch(setPostAuthor(value));
        }}
        name="author"
        placeholder="Author"
      ></StyledIncludeableField>

      <StyledDateField
        // onChange={onPostDateChange}
        onChange={value => {
          dispatch(setPostDate(value));
        }}
        name="date-written"
        placeholder="Date Written"
      ></StyledDateField>

      {/* TODO: CHoice between html and markup */}

      <StyledEditorField
        onChange={value => {
          dispatch(setPostContent(value));
        }}
      />
      <StyledResultField />
    </StyledForm>
  );
}

const StyledIncludeableField = styled(IncludeableField)`
  margin-top: 6px;
  margin-bottom: 6px;
`;

const StyledDateField = styled(DateField)`
  margin-top: 6px;
  margin-bottom: 6px;
`;

const StyledResultField = styled(ResultField)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledEditorField = styled(EditorField)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledForm = styled.div`
  text-align: center;
`;
