import React, { Component } from "react";
import PropTypes from "prop-types";

export default class FieldContainer extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

FieldContainer.propTypes = {
  title: PropTypes.string.isRequired
};
