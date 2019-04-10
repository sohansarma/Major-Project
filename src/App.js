import React, { Component } from 'react';
// import logo from './logo.svg';
import Navigation from './Components/Navigation';
import Dashboard from './Components/Dashboard';
import Main from './Components/Userdata';
import MaterialUploader from './Components/MaterialUploader';
import QueryModel from './Components/Query';
import './App.css';
import './Components/style.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {


  render() {
    return (
      <div>
      <Navigation />
      <Main />
      {/* <Dashboard /> */}
      </div>
    );
  }
}

export default App;
