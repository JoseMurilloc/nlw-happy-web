import React, { InputHTMLAttributes } from 'react';

import { Container, LabelInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  labelName: string;
}

const Input: React.FC<InputProps> = ({ name, type, labelName, ...rest}) => {
  return (
    <>
      <LabelInput htmlFor={name}>{labelName}</LabelInput>
      <Container type={type} autoComplete="off" name={name} />
    </>
  );
};

export default Input;
