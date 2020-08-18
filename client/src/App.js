import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Mars from './Components/Mars'
import Register from './Components/Register'
import SignIn from './Components/SignIn'
//import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={ Mars } />
        <Route exact path = '/login' component = { Login } />
        <Route exact path = '/register' component = { Register } />
      </Switch>
    </Router>
  );
}

export default App
