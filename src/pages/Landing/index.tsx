import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Lading() {
  return (
    <div id="page-lading">
     <div className="content-wrapper">
       <img src={logoImg} alt=""/>

       <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
       </main>

       <div className="location">
         <strong>Petrolina</strong>
         <span>Pernambuco</span>
       </div>

       <Link to="/app" className="enter-app">
         <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
       </Link>
     </div>
    </div>
  );
}

export default Lading;
