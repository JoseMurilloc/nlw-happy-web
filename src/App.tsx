import React from 'react';
import { AuthProvider } from './hooks/auth';
import Routes from './Routes';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes/>
    </AuthProvider>
  );
}

export default App;