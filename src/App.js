import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import PrivateRoute from './Components/Auth/PrivateRoutes'

import Home from './Components/Home'
import Cart from './Components/cart'
import Login from './Components/Auth/Login2'
import Billing from './Components/billing'



// import Home1 from './Components/home1'
// import Nav from './Components/nav'
// import Kit from './Components/VegItems'
// import Product from './Components/product'

export default function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/login" exact component={Login} />

        <PrivateRoute path="/" exact component={Home} /> 
        <PrivateRoute path="/cart" exact component={Cart} />
        <PrivateRoute path="/billing" exact component={Billing} />
     
      </Switch>
    </div>
    </Router>
  )
}
