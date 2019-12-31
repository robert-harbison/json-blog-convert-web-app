import React, { Component } from "react";
import styled from "styled-components";
import FieldContainer from "./FieldContainer";
import { connect } from "react-redux";

export default connect(mapStateToProps)(
  class ResultField extends Component {
    generateJSON() {
      // Which lines are included?
      let includePostID = this.props.state.data.postID;
      let includePostTitle = this.props.state.data.postTitle;
      let includePostAuthor = this.props.state.data.postAuthor;
      let includePostDate = this.props.state.data.postDate;
      let includePostContent =
        this.props.state.data.postContent !== "<p><br></p>";

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
          '\tid: "' +
          this.props.state.data.postID +
          '"' +
          (currentLine < totalLines ? "," : "") +
          "\n";
      }

      if (includePostTitle) {
        currentLine++;
        json +=
          '\ttitle: "' +
          this.props.state.data.postTitle +
          '"' +
          (currentLine < totalLines ? "," : "") +
          "\n";
      }

      if (includePostAuthor) {
        currentLine++;
        json +=
          '\tauthor: "' +
          this.props.state.data.postAuthor +
          '"' +
          (currentLine < totalLines ? "," : "") +
          "\n";
      }

      if (includePostDate) {
        currentLine++;
        json +=
          '\tdate: "' +
          this.props.state.data.postDate +
          '"' +
          (currentLine < totalLines ? "," : "") +
          "\n";
      }

      if (includePostContent) {
        json += '\tcontent: "' + this.props.state.data.postContent + '"\n';
      }

      json += "}";
      return json;
    }

    render() {
      const json = this.generateJSON();
      return (
        // TODO: Make tab size smaller so it looks better.
        // TODO: Mutliline content text doesnt get tabbed in.
        <FieldContainer title="Result:">
          <StyledEditor readOnly={true} value={json}></StyledEditor>
          {/* TODO: Add copy to clipboard button */}
        </FieldContainer>
      );
    }
  }
);
const StyledEditor = styled.textarea`
  width: 650px;
  min-height: 200px;
  resize: none;
`;

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}
