import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/home'
import Users from './containers/home/users'

function Routes(){

return(
<Router>
 <Switch>
<Route exact path='/' component={Home}/>
<Route exact path='/usuarios' Component={Users}/>
 </Switch>
</Router>
)

}
export default Routes