import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import FieldContainer from "./FieldContainer";
import "react-datepicker/dist/react-datepicker.css";

// TODO: Create base class for these field classes that have a include.
export default class DateField extends Component {
  state = {
    inputValue: new Date()
  };

  onIncludeChange = value => {
    this.setState({ shouldIncludeChecked: value.checked });
    // Passs the onChange up to the parent if it has one.
    if (this.props.onincludechange) {
      // TODO: Try not to generate a new string on each change.
      this.props.onincludechange(value.checked);
    }
  };

  onDateChange = value => {
    this.setState({
      inputValue: value
    });
    // Passs the onChange up to the parent if it has one.
    if (this.props.onDateChange) {
      this.props.ondatechange(value.value);
    }
  };

  render() {
    return (
      <FieldContainer title={this.props.placeholder + ":"}>
        <StyledDatePicker
          selected={this.state.inputValue}
          onChange={this.onDateChange}
        />
      </FieldContainer>
    );
  }
}

const StyledDatePicker = styled(DatePicker)`
  z-index: 1000;
`;

DateField.defaultProps = {
  shouldinclude: true
};

DateField.propTypes = {
  fieldname: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  ondatechange: PropTypes.func
};
