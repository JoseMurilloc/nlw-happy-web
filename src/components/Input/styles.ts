import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocus: boolean;
}

export const Container = styled.input<ContainerProps>`
  width: 360px;
  height: 64px;
  
  border: 1px solid #D3E2E5;
  box-sizing: border-box;
  border-radius: 20px;

  background: #F5F8FA;

  padding: 21px 24px;

  color: #5C8599;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  ${(props) => props.isFocus && css`
    border: 1px solid #A1E9C5;
  `}
`;

export const LabelInput = styled.label`
  color: #8FA7B3;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  margin-top: 16px;
`;