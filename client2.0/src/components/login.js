import React from "react";
import { useState } from 'react'
//import { useHistory } from "react-router-dom";

//import "../css/signin.css";

const Login = () => {
  
      
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://avr:80/login', {
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
            window.alert(data.message);
            console.log(data);
        }else{
            window.alert(data.message);
            console.log(data.message);
        } 
        
	}
    return (
       <>
            <div className="text-center">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="row align-items-center g-lg-5 py-5">
                
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 bg-dark text-white">
                    <img className="mb-4" src="logo4.png" alt="" width="72" height="72" align="center" />
                    <h1 className="h3 mb-3 fw-normal" color="white">Please sign in</h1>
                    <div className="form-floating mb-3 text-black">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3 text-black">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={loginUser}>Log in</button>
                    <hr className="my-4" />
                    <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </>
    );
    
}
  
  export default Login;