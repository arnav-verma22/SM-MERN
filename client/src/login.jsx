import React from "react";
import { useState } from 'react'
//import { useHistory } from "react-router-dom";

import "./signin.css";

const Login = () => {
  
      
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://avr:80/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
			
		})

		const data = await response.json();

		if (response.status === 200)
        {
            window.alert("successfull GET", data.message);
            console.log(data);
        }else{
            window.alert(data.status);
            console.log(data.status);
        }
	}
    return (
        <React.Fragment>
            <main className="form-signin">
            <form onSubmit={loginUser}>
                <img className="mb-4" src="logo4.png" alt="" width="72" height="72" align="center" />
                <h1 className="h3 mb-3 fw-normal" color="white">Please sign in</h1>

                <div className="form-floating">
                
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email}
					onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password}
					onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
                </div>
                <button className="w-100 btn btn-lg btn-outline-success" type="submit" onClick={loginUser}>Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
            </main>

        </React.Fragment>
    );
    
}
  
  export default Login;