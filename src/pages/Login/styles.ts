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
`;

export const Form = styled.form`
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 360px;
  height: 430px;

  margin-top: 100px;


  h1 {
    color: #5C8599;
    font-weight: bold;
    font-size: 32px;
    line-height: 34px;
    margin-bottom: 24px;
  }

  label {
    color: #8FA7B3;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    margin-top: 16px;
  }

  > div {
    width: 100%;
    margin-bottom: 40px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* background-color: yellow; */
    align-items: center;
    margin-top: 24px;
  }

  div a {
    color: #8FA7B3;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;
  }

  button {
    width: 360px;
    height: 64px;

    background: #37C77F;
    border-radius: 20px;
    border: none;

    color: #FFFFFF;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
  }

`;

export const InputCheck = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  input {
    margin-right: 16px;
    border: 1px solid #D3E2E5;
    box-sizing: border-box;
    border-radius: 8px;

    background: #F5F8FA;
    width: 24px;
    height: 24px;
  }

  label {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #8FA7B3;
  }

`;