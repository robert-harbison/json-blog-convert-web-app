import React, { Component } from "react";
import FieldContainer from "./FieldContainer";
import PropTypes from "prop-types";

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
      <FieldContainer title={this.props.placeholder + ":"}>
        <input
          type="text"
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.onChange}
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
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func
};
