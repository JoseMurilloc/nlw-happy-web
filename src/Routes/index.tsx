import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import CreateOrphanage from '../pages/CreateOrphanage';
import Dashboard from '../pages/Dashboard';
import DeleteOrpganage from '../pages/DeleteOrpganage';
import ForgotPassword from '../pages/ForgotPassword';
import Lading from '../pages/Landing';
import Login from '../pages/Login';
import Orphanage from '../pages/Orphanage';
import OrphanageRegisterOkay from '../pages/OrphanageRegisterOkay';
import OrphanagesMap from '../pages/OrphanagesMap';
import ResetPassword from '../pages/ResetPassword';

import Route from './Route';

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

        <Route path="/delete" component={DeleteOrpganage} isPrivate={true} />
        <Route path="/created" component={OrphanageRegisterOkay} isPrivate={true} />


        <Route path="/dashboard" component={Dashboard} isPrivate={true}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;