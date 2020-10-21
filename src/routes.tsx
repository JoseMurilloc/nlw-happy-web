import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import CreateOrphanage from './pages/CreateOrphanage';
import Lading from './pages/Landing';
import Login from './pages/Login';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Lading} />
        <Route path="/app" component={OrphanagesMap} />
        
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/organages/:id" component={Orphanage} />
        
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;