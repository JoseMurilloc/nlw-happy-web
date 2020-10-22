import React from 'react';

import { Container } from './styles';
import logoDeleta from '../../images/logo-delete.svg';

const DeleteOrpganage: React.FC = () => {
  return (
    <Container>
      <header>
        <h1>Excluir</h1>
        <span>Você tem certeza que quer excluir Orf. Esperança?</span>

        <button>
          Voltar para o mapa
        </button> 
      </header>

      <div>
        <img src={logoDeleta} alt="Logo deleta Orfanatos"/>
      </div>
    </Container>
  );
};

export default DeleteOrpganage;
