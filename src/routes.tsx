import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import CreateOrphanage from './pages/CreateOrphanage';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import Lading from './pages/Landing';
import Login from './pages/Login';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';
import ResetPassword from './pages/ResetPassword';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Lading} />
        <Route path="/app" component={OrphanagesMap} />
        
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/organages/:id" component={Orphanage} />
        
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/reset" component={ResetPassword} />

        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;