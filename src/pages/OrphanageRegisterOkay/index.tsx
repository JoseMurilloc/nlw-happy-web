import React from 'react';

import { Container } from './styles';
import logoCreate from '../../images/logo-create.svg';

const OrphanageRegisterOkay: React.FC = () => {
  return (
    <Container>
      <header>
        <h1>Ebaaa!</h1>
        <span>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar</span>

        <button>
          Voltar para o mapa
        </button> 
      </header>

      <div>
        <img src={logoCreate} alt="Logo deleta Orfanatos"/>
      </div>
    </Container>
  );
};

export default OrphanageRegisterOkay;
