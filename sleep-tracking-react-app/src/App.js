import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import NavBar from './components/users/NavBar.js'
import Intro from './components/users/Intro.js'
import Login from './components/auth/Login.js'
import User from './components/users/User.js'

import PrivateRoute from './components/auth/privateRoute.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Intro} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/users' component={User} />
      </div>
    );
  }
}

export default App;
