import React, {useState} from 'react';
import { registerUser } from '../mainReducer';
import AddProfilePic from './AddProfilePic';


const Register = ({
	dispatch,
	history,
}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
return(
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
           <main className="auth__style pa4 black-80">
		     <div className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f1 fw6 ph0 mh0">Register</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
		        <input 
		        className="pa2 input-reset ba bg-transparent hover-bg-black hover-blue w-100" 
		        type="text" 
		        name="name"  
		        id="name" 
						value={name}
						onChange={({ target }) => {
							const { value } = target;
							setName(value);
						}}
                // onChange = {this.onNameChange}
		        />
		      </div>
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
					<div onClick={AddProfilePic}>Upload Your Picture</div>
		    </fieldset>
		    <div className="">
		      <input
		      onClick = {async () => {
						let registrationValid = await registerUser(dispatch)({ email, password, name });
						if (registrationValid) {
							history.push("/login");
						}
					}} 
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
		    </div>
        </div>
     </main>
</article>

		);
	}

export default Register ;