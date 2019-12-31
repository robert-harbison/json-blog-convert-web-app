import React, { Component } from "react";
import FieldContainer from "./FieldContainer";
import PropTypes from "prop-types";

export default class IncludeableField extends Component {
  state = {
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
      </FieldContainer>
    );
  }
}

IncludeableField.defaultProps = {
  shouldinclude: true
};

IncludeableField.propTypes = {
  fieldname: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  ontextchange: PropTypes.func
};
