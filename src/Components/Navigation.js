import React from 'react';

const Navigation = ({ history  }) => {
  if(window.location.pathname === "/home") {
    return(
           <nav className="nav__styling">
           <p onClick={() => history.push('/login')} className = 'f3 link dim black underline pa3 pointer'>Sign Out</p>
       </nav>
       );
  }else{
    return(
           <nav className="nav__styling">
           <p onClick={() => history.push('/login')} className = 'f3 link dim black underline pa3 pointer'>Sign In</p>
           <p onClick={() => history.push('/register')} className = 'f3 link dim black underline pa3 pointer'>Register</p>
       </nav>
      );
  }
  
}

export default Navigation;