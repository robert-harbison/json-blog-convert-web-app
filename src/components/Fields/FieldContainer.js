import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default class FieldContainer extends Component {
  render() {
    return (
      <StyledContainer className={this.props.className}>
        <StyledTitle>{this.props.title}</StyledTitle>
        {this.props.children}
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  display: inline-block;
  ${"" /* margin-top: 10px; */}
`;

const StyledTitle = styled.h2`
  text-align: left;
`;

FieldContainer.propTypes = {
  title: PropTypes.string.isRequired
};
