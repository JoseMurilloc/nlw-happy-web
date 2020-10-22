import styled from 'styled-components';

export const Container = styled.div`
  background: #FF669D;
  height: 100vh;
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
      width: 291px;
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

      background: #D6487B;
      border-radius: 20px;
      color: #FFFFFF;
      font-weight: 800;
      font-size: 18px;
      line-height: 25px;
    }
  }
`;
