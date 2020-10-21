import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Background from '../../components/Background';


import { Container, Content, Form, InputCheck } from './styles';

const Login: React.FC = () => {
    return (
      <Container>
        <Background />
        <Content>
          <div>
            <Link to="/">
              <FiArrowLeft size={48} color="#15C3D6"/>
            </Link>
          </div>
          <Form>
            <h1>Fazer login</h1>

            <label htmlFor="email">Email</label>
            <input autoComplete="off" type="text" name="email" />

            <label htmlFor="passoword">Senha</label>
            <input autoComplete="off" type="text" name="passoword" />

            <div>
              <InputCheck>
                <input type="checkbox" id="lembreme" name="checkbox"/>
                <label htmlFor="lembreme">Lembre-me</label>
              </InputCheck>

              <a href="/forgort">Esqueci minha senha</a>
            </div>

            <button type="submit">
              Entrar
            </button>
          </Form>
        </Content>
      </Container>
    );
  }

  export default Login;
