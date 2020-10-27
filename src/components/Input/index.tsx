import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { Container, LabelInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  labelName: string;
}

const Input: React.FC<InputProps> = ({ name, type, labelName, ...rest}) => {
  const [ isFocus, setIsFocus ] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, error, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])


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
        defaultValue={defaultValue}
        ref={inputRef}
      />
    </>
  );
};

export default Input;
