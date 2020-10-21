import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ name, type, ...rest}) => {
  return (
    <Container type={type} autoComplete="off" name={name} />
  );
};

export default Input;
