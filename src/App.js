import React, { Component } from 'react';
// import logo from './logo.svg';
import Signin from './Components/Signin';
import Register from './Components/Register';
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

   onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    }else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }


  render() {
  	 const {isSignedIn,route} = this.state;
    return (
      <div className="App">
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
       { route === 'home'
          ? <div>
           <Main />
           </div> 
          : (
            route === 'signin' 
            ? <Signin onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;
