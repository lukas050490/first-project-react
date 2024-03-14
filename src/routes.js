import React from 'react';
import { BrowserRouter as Router, Routes , Route, } from 'react-router-dom';

import Home from './containers/home'
import Users from './containers/home/users'

function AppRoutes(){

return(
<Router>
 <Routes>
<Route exact path='/' component={Home}/>
<Route exact path='/usuarios' Component={Users}/>
</Routes>
</Router>
)

}
export default AppRoutes