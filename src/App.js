import React, { Component, useReducer } from 'react';
// import logo from './logo.svg';
import Login from './Components/Signin';
import Register from './Components/Register';
import Navigation from './Components/Navigation';
import Dashboard from './Components/Dashboard';
import Main from './Components/Userdata';
import MaterialUploader from './Components/MaterialUploader';
import QueryModel from './Components/Query';
import { Snackbar, CircularProgress } from '@material-ui/core';
import './App.css';
import './Components/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from './Components/userprofile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
 } from 'react-router-dom';
 import { initalData, reducer, } from './mainReducer';


const RedirectToLogin = () => <Redirect to="/login" />;


export const PrivateRoute = (...props) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Route {...props} />
  } else {
    return <RedirectToLogin />;
  }
}

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, initalData);
  return (
    <div className="App">
      {state.loading && <CircularProgress />}
      <Snackbar
        open={state.error}
        message={state.errorMessage}
      />
      <Router>
        <Route path="/" component={(router, context) => <Navigation {...router} isSignedIn={true}/>} />
        <Switch>
          <Route exact path="/" component={RedirectToLogin} />
          <PrivateRoute exact path="/home" component={(router, context) => <Main {...router} dispatch={dispatch} stateTree={state} />} />
          <Route exact path="/register" component={(router, context) => <Register {...router} dispatch={dispatch} />} />
          <Route exact path="/login" component={(router, context) => <Login {...router} dispatch={dispatch} error={state.error} errorMessage={state.errorMessage} />} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
