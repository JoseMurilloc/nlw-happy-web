import React, { InputHTMLAttributes, useCallback, useState } from 'react';

import { Container, LabelInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  labelName: string;
}

const Input: React.FC<InputProps> = ({ name, type, labelName, ...rest}) => {
  const [ isFocus, setIsFocus ] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocus(true);
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocus(false);
  }, [])

  return (
    <>
      <LabelInput htmlFor={name}>{labelName}</LabelInput>
      <Container 
        isFocus={isFocus}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type={type}
        autoComplete="off" 
        name={name} 
      />
    </>
  );
};

export default Input;
