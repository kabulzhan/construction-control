import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : "165px")};
  height: ${(props) => (props.height ? props.height : "28px")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "grey")};
  margin-top: ${(props) => (props.mTop ? props.mTop : 0)};
  border-radius: ${(props) => (props.br ? props.br : 0)};
  color: white;
  border: none;
  cursor: pointer;
`;

const CustomButton = ({ children, ...otherProps }) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default CustomButton;
