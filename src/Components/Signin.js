import React, { useState } from 'react';
import {
	loginUser,
	setError
} from '../mainReducer';

// class Signin extends React.Component {
//     constructor(props) {
//     	super(props);
//     	this.state = {
//     		signInEmail: '',
//     		signInPassword: ''
//     	}
//     }
// 	onEmailChange = (event) => {
//       this.setState({signInEmail: event.target.value})
// 	}

//     onPasswordChange = (event) => {
// 		this.setState({signInPassword: event.target.value})
// 	}

// 	onButtonSignIn = () => {
// 		fetch('http://localhost:3000/signin',{
// 			method: 'post',
// 			headers: {'content-type':'application/json'},
// 			body: JSON.stringify({
// 				email:this.state.signInEmail,
// 				password:this.state.signInPassword
// 			})
// 		})
// 		 .then(response => response.json())
// 		 .then(user => {
// 		 	if (user.id) {
// 		 		this.props.loadUser(user);
// 		 		this.props.onRouteChange('home');
// 	          }
// 		 	})
// 		 }

const Signin = ({
	dispatch,
	history
}) => {
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");
		return(
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
           <main className="auth__style pa4 black-80">
		     <div className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input 
							className="pa2 input-reset ba bg-transparent hover-bg-black hover-blue w-100" 
							type="email" 
							name="email-address"  
							id="email-address" 
							value={email}
							onChange={({ target }) => {
								const { value } = target;
								setEmail(value);
							}}
                // onChange = {this.onEmailChange}
		        />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input 
							className="b pa2 input-reset ba bg-transparent hover-bg-black hover-blue w-100" 
							type="password" 
							name="password"  
							id="password"
							value={password}
							onChange={({ target }) => {
								const { value } = target;
								setPassword(value);
							}}
                // onChange = {this.onPasswordChange}
		        />
		      </div>
		    </fieldset>
		    <div className="">
		      <input
		      onClick = {async () => {
						const isLoginValid = await loginUser(dispatch)({email, password});
						console.log(isLoginValid);
						if (isLoginValid) {
							history.push("/home");
						} else {
							setError(dispatch)("Login is not valid");
							setEmail("");
							setPassword("");
						}
					}}
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
		    </div>
		    <div className="lh-copy mt3">
		      <p
						onClick = {() => {
							history.push("/register");
						}}
						className="f6 link dim black db pointer"
					>
						Register
					</p>
		    </div>
        </div>
     </main>
</article>

		);
}

export default Signin;