import React, { Component } from "react";
import styled from "styled-components";
import FieldContainer from "./FieldContainer";
import { connect } from "react-redux";

export default connect(mapStateToProps)(
  class ResultField extends Component {
    generateJSON() {
      // Which lines are included?
      let includePostID = this.props.state.postID;
      let includePostTitle = this.props.state.postTitle;
      let includePostAuthor = this.props.state.postAuthor;
      let includePostDate = this.props.state.postDate;
      let includePostContent = this.props.state.postContent !== "<p><br></p>";

      // Ecludes the { and } lines at the top and bottom. Basiccally total lines - 2
      let totalLines = 0;
      let json = "{\n";
      let currentLine = 0; // 1 because we created the first line above.

      // Counts the total lines.
      if (includePostID) totalLines++;
      if (includePostTitle) totalLines++;
      if (includePostAuthor) totalLines++;
      if (includePostDate) totalLines++;
      if (includePostContent) totalLines++;

      if (includePostID) {
        currentLine++;
        json +=
          '\t"id": "' +
          this.props.state.postID +
          '"' +
          (currentLine < totalLines ? "," : "") +
          "\n";
      }

      if (includePostTitle) {
        currentLine++;
        json +=
          '\t"title": "' +
          this.props.state.postTitle +
          '"' +
          (currentLine < totalLines ? "," : "") +
          "\n";
      }

      if (includePostAuthor) {
        currentLine++;
        json +=
          '\t"author": "' +
          this.props.state.postAuthor +
          '"' +
          (currentLine < totalLines ? "," : "") +
          "\n";
      }

      if (includePostDate) {
        currentLine++;
        json +=
          '\t"date": "' +
          this.props.state.postDate +
          '"' +
          (currentLine < totalLines ? "," : "") +
          "\n";
      }

      if (includePostContent) {
        json +=
          '\t"content": "' +
          this.props.state.postContent.replace("\n", "\\n") +
          '"\n';
      }

      json += "}";
      return json;
    }

    render() {
      const json = this.generateJSON();
      return (
        // TODO: Make tab size smaller so it looks better.
        // TODO: Mutliline content text doesnt get tabbed in.
        <FieldContainer title="Result:" className={this.props.className}>
          <StyledEditor readOnly={true} value={json}></StyledEditor>
          {/* TODO: Add copy to clipboard button */}
        </FieldContainer>
      );
    }
  }
);
const StyledEditor = styled.textarea`
  width: 630px;
  min-height: 200px;
  resize: none;
  border: 1px solid ${props => props.theme.fieldBorderColor};
  border-radius: ${props => props.theme.fieldBorderRadius};
  padding: 10px;
`;

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}
