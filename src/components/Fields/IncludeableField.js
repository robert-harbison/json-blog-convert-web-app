import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default class IncludeableField extends Component {
  state = {
    inputValue: ""
  };

  onChange = value => {
    this.setState({ inputValue: value.target.value });
    // Passs the onChange up to the parent if it has one.
    if (this.props.onChange) {
      this.props.onChange(value.target.value);
    }
  };

  render() {
    return (
      // <FieldContainer title={this.props.placeholder + ":"}>
      <StyledField
        className={this.props.className}
        type="text"
        name={this.props.name}
        placeholder={this.props.placeholder}
        onChange={this.onChange}
        value={this.state.inputValue}
      ></StyledField>
      // </FieldContainer>
    );
  }
}

const StyledField = styled.input`
  width: 630px;
  height: 30px;
  font-size: 14px;
  border: 1px solid ${props => props.theme.fieldBorderColor};
  border-radius: ${props => props.theme.fieldBorderRadius};
  padding-left: 10px;
  padding-right: 10px;
`;

IncludeableField.defaultProps = {
  shouldinclude: true
};

IncludeableField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func
};
