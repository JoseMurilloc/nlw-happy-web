import styled from 'styled-components';

export const Container = styled.div`
  background: #37C77F;  height: 100vh;
  color: #FFFFFF;

  display: flex;
  justify-content: center;
  align-items: center;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-right: 180px;

    h1 {
      color: #FFFFFF;
      font-weight: 800;
      font-size: 80px;
      line-height: 80px;

      margin-bottom: 32px;
    }

    span {
      text-align: center;
      height: 102px;
      width: 364px;
      color: #FFFFFF;
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;

      margin-bottom: 84px;
    }

    button {
      width: 243px;
      height: 64px;
      border: none;
      cursor: pointer;

      background: #31B272;
      border-radius: 20px;
      color: #FFFFFF;
      font-weight: 800;
      font-size: 18px;
      line-height: 25px;
    }
  }
`;
