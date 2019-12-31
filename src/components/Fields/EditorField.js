import React, { Component } from "react";
import RichTextEditor from "react-rte";
import styled from "styled-components";
import PropTypes from "prop-types";
import FieldContainer from "./FieldContainer";

export default class EditorField extends Component {
  state = {
    editorValue: RichTextEditor.createEmptyValue()
  };

  onChange = value => {
    this.setState({ editorValue: value });
    // Passs the onChange up to the parent if it has one.
    if (this.props.onChange) {
      // TODO: Try not to generate a new string on each change.
      this.props.onChange(value.toString("html"));
    }
  };

  render() {
    return (
      <FieldContainer title="Post Content:">
        <StyledEditor value={this.state.editorValue} onChange={this.onChange} />
      </FieldContainer>
    );
  }
}

EditorField.propTypes = {
  onChange: PropTypes.func
};

const StyledEditor = styled(RichTextEditor)`
  width: 650px;
  min-height: 200px;
`;
