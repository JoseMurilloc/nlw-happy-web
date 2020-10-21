import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`

display: flex;
  align-items: center;
  justify-content: center;

  width: 100vh;

  > div {
    background-color: #EBF2F5;
    width: 48px;
    height: 48px;
    border-radius: 16px;

    position: absolute;
    left: 93.68%;
    right: 2.99%;
    top: 4.88%;
    bottom: 89.27%;

    cursor: pointer;
  }

  form {
    width: 360px;
    height: 336px;

    button {
      margin-top: 24px;
    }
  }

  form h1 {
    color: #5C8599;
    font-weight: bold;
    font-size: 32px;
    line-height: 34px;

    margin-bottom: 24px;
  }

  form span {
    color: #5C8599;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;

    margin-bottom: 40px;
  }

`;
