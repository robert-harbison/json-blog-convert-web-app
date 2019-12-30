import React, { Component, useEffect } from "react";
import RichTextEditor from "react-rte";
import styled from "styled-components";
import PropTypes from "prop-types";
import FieldContainer from "./FieldContainer";
import { useSelector, connect } from "react-redux";

export default connect(mapStateToProps)(
  class ResultField extends Component {
    constructor(props) {
      super(props);
    }

    generateJSON() {
      let json = "{\n";

      if (this.props.state.data.postID !== "")
        json += '\tid: "' + this.props.state.data.postID + '"\n';

      if (this.props.state.data.postTitle !== "")
        json += '\ttitle: "' + this.props.state.data.postTitle + '"\n';

      if (this.props.state.data.postAuthor !== "")
        json += '\tauthor: "' + this.props.state.data.postAuthor + '"\n';

      if (this.props.state.data.postDate !== "")
        json += '\tdate: "' + this.props.state.data.postDate + '"\n';

      if (this.props.state.data.postContent !== "")
        json += '\tcontent: "' + this.props.state.data.postContent + '"\n';

      json += "}";
      return json;
    }

    render() {
      const json = this.generateJSON();
      return (
        // TODO: Make tab size smaller so it looks better.
        // TODO: Mutliline content text doesnt get tabbed in.
        <FieldContainer title="Result:">
          {/* <StyledEditor readOnly={true} value={this.state.resultValue} /> */}
          <StyledEditor readOnly={true} value={json}></StyledEditor>
          {/* Add copy to clipboard button
           */}
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
    // result: state.data.result
  };
}
