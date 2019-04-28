import React from 'react';

const Navigation = ({ onRouteChange,isSignedIn  }) => {
  if(isSignedIn) {
    return(
           <nav className="nav__styling">
           <p onClick={() => onRouteChange('signout')} className = 'f3 link dim black underline pa3 pointer'>Sign Out</p>
       </nav>
       );
  }else{
    return(
           <nav className="nav__styling">
           <p onClick={() => onRouteChange('signin')} className = 'f3 link dim black underline pa3 pointer'>Sign In</p>
           <p onClick={() => onRouteChange('Register')} className = 'f3 link dim black underline pa3 pointer'>Register</p>
       </nav>
      );
  }
  
}

export default Navigation;