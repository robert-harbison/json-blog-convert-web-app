import React, { Component, Fragment } from "react";
import RichTextEditor from "react-rte";
import styled from "styled-components";
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
