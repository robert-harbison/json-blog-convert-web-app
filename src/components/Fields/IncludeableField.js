import React, { Component } from "react";
import RichTextEditor from "react-rte";
import FieldContainer from "./FieldContainer";
import styled from "styled-components";
import PropTypes from "prop-types";

export default class IncludeableField extends Component {
  state = {
    shouldIncludeChecked: true,
    inputValue: ""
  };

  onIncludeChange = value => {
    this.setState({ shouldIncludeChecked: value.target.checked });
    // Passs the onChange up to the parent if it has one.
    if (this.props.onincludechange) {
      // TODO: Try not to generate a new string on each change.
      this.props.onincludechange(value.target.checked);
    }
  };

  onTextChange = value => {
    this.setState({ inputValue: value.target.value });
    // Passs the onChange up to the parent if it has one.
    if (this.props.ontextchange) {
      this.props.ontextchange(value.target.value);
    }
  };

  render() {
    return (
      <FieldContainer title={this.props.placeholder + ":"}>
        <input
          type="text"
          name={this.props.fieldname}
          placeholder={this.props.placeholder}
          onChange={this.onTextChange}
          value={this.state.inputValue}
        ></input>
        <label>
          <CheckboxLabel />
          <input
            type="checkbox"
            name={this.props.fieldName + "-should-include"}
            checked={this.state.shouldIncludeChecked}
            onChange={this.onIncludeChange}
          />
          Include This Field
        </label>
      </FieldContainer>
    );
  }
}

const CheckboxLabel = styled.label`
  display: ${props => (props.shouldInclude ? "block" : "none")};
`;

IncludeableField.defaultProps = {
  shouldinclude: true
};

IncludeableField.propTypes = {
  fieldname: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  shouldinclude: PropTypes.bool,
  ontextchange: PropTypes.func,
  onincludechange: PropTypes.func
};
