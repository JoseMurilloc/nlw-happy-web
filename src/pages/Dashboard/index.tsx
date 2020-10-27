import React, { useState } from 'react';

import { Container, Main, ContainerListOrphanageGrip, ContainerOrphanage } from './styles';

import logoImage from '../../images/map-marker.svg'
import { Link } from 'react-router-dom';

import localMarker from '../../images/local-marker.svg';
import alertCircle from '../../images/alert-cicle.svg';
import close from '../../images/close.svg';
import mapa from '../../images/mapa.svg';
import notFoundOrphanages from '../../images/not-found-orphanages.svg';

import {  FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';


const Dashboard: React.FC = () => {

  const [orphanages, Orphanages] = useState(true);
  const { sigOut } = useAuth();

  return (
    <Container>
      <header>
        <img src={logoImage} alt="logo happy"/>

        <div>
          <Link to="/">
            <img src={localMarker} alt=""/>
          </Link>
          <Link to="/">
            <img src={alertCircle} alt=""/>
          </Link>
        </div>

        <button onClick={sigOut}>
          <img src={close} alt=""/>
        </button>
      </header>

      <Main orphanages={orphanages}>
        <header>
          <h1>Orfanatos Cadastrados</h1>
          <span>2 ofanatos</span>
        </header>

        {orphanages ? (
          <ContainerListOrphanageGrip>
          <ContainerOrphanage>
              <img src={mapa} alt=""/>
             
              <footer>
                <h1>Orf. Esperança</h1>
                  
                  <div>
                    <Link to="/delete">
                      <RiDeleteBin7Line color="#15C3D6" size={30}/>
                    </Link>
                    <Link to="/orphanages/create">
                      <FiEdit3 color="#15C3D6" size={30}/>
                    </Link>   
                  </div>   
              </footer>  
             
          </ContainerOrphanage>

          <ContainerOrphanage>
              <img src={mapa} alt=""/>
             
              <footer>
                <h1>Orf. Esperança</h1>
                  
                  <div>
                    <Link to="/delete">
                      <RiDeleteBin7Line color="#15C3D6" size={30}/>
                    </Link>
                    <Link to="/">
                      <FiEdit3 color="#15C3D6" size={30}/>
                    </Link>   
                  </div>   
              </footer>  
             
          </ContainerOrphanage>
          
        
          </ContainerListOrphanageGrip>
        ) : (
          <div>
            <img src={notFoundOrphanages} alt="Não encontrado orfanatos"/>
          </div>
        )}
      </Main>
    </Container>
  );
};

export default Dashboard;
