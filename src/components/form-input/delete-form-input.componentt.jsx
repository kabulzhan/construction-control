import React from "react";
import styled from "styled-components";

const InputContainer = styled.input`
  display: block;
  width: ${(props) => (props.width ? props.width : "317px")};
  height: ${(props) => (props.height ? props.height : "29px")};
  border: 1px solid #a9a9a9;
  margin-bottom: ${(props) => (props.mBtm ? props.mBtm : 0)};
`;

const LabelContainer = styled.label`
  font-size: ${(props) => (props.fs ? props.fs : "12px")};
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  padding-left: 5px;
`;

const FormInput = ({ handleChange, label, fs, ...otherProps }) => {
  return (
    <div>
      {label ? <LabelContainer fs={fs}>{label}</LabelContainer> : null}
      <InputContainer onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
