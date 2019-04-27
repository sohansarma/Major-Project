import React, { Component } from 'react';
// import logo from './logo.svg';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './Components/Navigation';
import Dashboard from './Components/Dashboard';
import Main from './Components/Userdata';
import MaterialUploader from './Components/MaterialUploader';
import QueryModel from './Components/Query';
import './App.css';
import './Components/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from './Components/userprofile';

class App extends Component {

	constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

loadUser = (data) => {
    this.setState({user:{
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
    }})
   }

   onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    }else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }


  render() {
    return (
      <div>
      <Navigation />
      <Main />
      {/* <Profile /> */}
      </div>
    );
  }
}

export default App;
