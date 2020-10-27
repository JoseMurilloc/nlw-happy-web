import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import Background from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';

import { Container, Content, InputCheck } from './styles';

import { Form } from '@unform/web';
import { useAuth } from '../../hooks/auth';

interface SiginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  
  const { sigIn } = useAuth();
  const history = useHistory();

  const handleLogin = useCallback(async (data: SiginFormData) => {    

    try {
      await sigIn({email: data.email, password: data.password})
    } catch(err) {
      console.log(err);
    }

    history.push('/dashboard');

  },[])

  return (
    <Container>
      <Background />
      <Content>
        <div>
          <Link to="/">
            <FiArrowLeft size={48} color="#15C3D6"/>
          </Link>
        </div>
        <Form onSubmit={handleLogin}>
          <h1>Fazer login</h1>

          <Input 
            labelName="Email"
            type="text"
            name="email"
            id="email"
          />

          <Input 
            labelName="Senha"
            type="password"
            name="password"
            id="password"
          />

          <div>
            <InputCheck>
              <input type="checkbox" id="lembreme" name="checkbox"/>
              <label htmlFor="lembreme">Lembre-me</label>
            </InputCheck>

            <Link to="/forgot">Esqueci minha senha</Link>
          </div>

          <Button>
            Entrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
  }

  export default Login;
