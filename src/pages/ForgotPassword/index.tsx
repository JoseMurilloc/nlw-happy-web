import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Background from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content } from './styles';

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <div>
          <Link to="/login">
            <FiArrowLeft size={48} color="#15C3D6"/>
          </Link>
        </div>

        <form>
          <h1>Esqueci minha senha</h1>
          <span>Sua redefinição de senha será enviada para o e-mail cadastrado.</span>
          <br/>
          <br/>
          <Input labelName="Email" type="email" name="email" />
          <Button>
            Entrar
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
