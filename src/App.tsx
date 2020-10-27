import React from 'react';
import { AuthProvider } from './hooks/auth';
import Routes from './Routes';

import './styles/global.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}

export default App;