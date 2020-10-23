import styled, { css } from 'styled-components';

interface MainProps {
  orphanages: boolean;
}

export const Container = styled.div`

  display: flex;

  > header {

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: #15C3D6;

    width: 96px;
    height: 100vh;

    padding: 32px 0;

    img {
      width: 50px;
    }

    div {
      display: flex;
      flex-direction: column; 
      align-items: center;
    }

    button {
      background-color: transparent;
      border: 0;
    }
  }
`;

export const Main = styled.main<MainProps>`

  width: 100%;
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 122px;

    margin: 0 120px;
    border-bottom: 1px solid #D3E2E5;
    
    
  }

  h1 {
    color: #4D6F80;
    font-weight: bold;
    font-size: 32px;
    line-height: 34px;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #8FA7B3;
  }

  ${props => !props.orphanages && css`
    div { 
      width: 100%;
      height: 487px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const ContainerListOrphanageGrip = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 100px;
  margin-top: 40px;
`;

export const ContainerOrphanage = styled.div`
  width: 544px;
  height: 227px;
  box-sizing: border-box;
  margin-right: 32px;


  footer {
    background-color: #fff;
    height: 82px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 32px;
    > div {


      a + a {
        margin-left: 8px;
      }

      a {
        background: #EBF2F5;
        border-radius: 16px;
        width: 48px;
        height: 48px;
        padding: 15px;
      }
    }

  }
`;
