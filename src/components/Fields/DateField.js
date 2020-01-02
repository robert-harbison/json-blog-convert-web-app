import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// TODO: Create base class for these field classes that have a include.
export default class DateField extends Component {
  state = {
    inputValue: ""
  };

  onChange = value => {
    this.setState({
      inputValue: value
    });
    // Passs the onChange up to the parent if it has one.
    if (this.props.onChange) {
      if (value !== null) {
        this.props.onChange(value.toDateString()); // TODO: Option for local date value.toLocaleDateString()
      } else {
        this.props.onChange("");
      }
    }
  };

  render() {
    return (
      // <FieldContainer title={this.props.placeholder + ":"}>
      <StyledDatePicker
        className={this.props.className}
        placeholderText={this.props.placeholder}
        selected={this.state.inputValue}
        onChange={this.onChange}
      />
      // </FieldContainer>
    );
  }
}

const StyledDatePicker = styled(DatePicker)`
  z-index: 1000;
  width: 630px;
  height: 30px;
  font-size: 14px;
  border: 1px solid ${props => props.theme.fieldBorderColor};
  border-radius: ${props => props.theme.fieldBorderRadius};
  padding-left: 10px;
  padding-right: 10px;
`;

DateField.defaultProps = {
  shouldinclude: true
};

DateField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func
};
