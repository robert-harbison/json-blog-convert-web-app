import React from "react";

import styled from "styled-components";

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Logo>JSON Blog Entry Generator</Logo>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  min-width: 650px;
  height: 60px;
  border-bottom: 1px solid ${props => props.theme.fieldBorderColor};
  margin-bottom: 50px;
  -webkit-box-shadow: 0px 0px 2px 0px ${props => props.theme.fieldBorderColor};
  box-shadow: 0px 0px 2px 0px ${props => props.theme.fieldBorderColor};
`;

const Logo = styled.h1`
  line-height: 60px;
  font-size: 26px;
  margin-left: 10px;

  @media (max-width: 768px) {
    text-align: center;
    margin-left: 0;
  }
`;
