import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Lading from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Lading} />
        <Route path="/app" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;