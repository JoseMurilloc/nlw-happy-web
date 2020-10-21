import React from 'react';

import { Container } from './styles';
import logoTipoImage from '../../images/logo-tipo.svg';

const Background: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logoTipoImage} alt="Logo tipo Happy"/>

        <div>
          <strong>Petrolina</strong>
          <span>Pernambuco</span>
        </div>
      </div>
    </Container>
  );
};

export default Background;
