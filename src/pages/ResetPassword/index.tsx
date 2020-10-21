import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content } from './styles';

const ResetPassword: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <div>
          <Link to="/">
            <FiArrowLeft size={48} color="#15C3D6"/>
          </Link>
        </div>

        <form>
          <h1>Redefinição de senha</h1>
          <span>Escolha uma nova senha para você acessar o dashboard do Happy</span>
          <br/>
          <br/>
          <Input labelName="Nova senha" type="password" name="email" />
          <Input labelName="Repetir senha" type="password" name="email" />
          <Button>
            Entrar
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default ResetPassword;
