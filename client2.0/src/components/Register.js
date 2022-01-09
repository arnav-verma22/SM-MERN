import React from "react";
import { useState } from 'react'
//import "../css/form-validation.css";


const Register = () => {
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://avr:80/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                username,
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

    return(
        
        <>
        <div className="col-md-10 mx-auto col-lg-6">
         <div className="row align-items-center g-lg-5 py-5">
        
        <form class="needs-validation p-4 p-md-5 border rounded-3 bg-dark text-white" noValidate>
        <h4 class="mb-3">Join Our Community</h4>
          <div class="row g-3">
            
          <div class="col-12">
              <label for="username" class="form-label">Username</label>
              <div class="input-group has-validation">
              <span class="input-group-text">#</span>
                <input type="text" class="form-control" id="username" placeholder="Username" value={username} 
                onChange={(e) => setUsername(e.target.value)} required />
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="email" class="form-control" id="email" placeholder="you@example.com" value={email} 
                onChange={(e) => setEmail(e.target.value)} required />
              <div class="invalid-feedback">
                  Your email is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="password" class="form-label">Password</label>
              <div class="input-group has-validation">
              <span class="input-group-text">**</span>
                <input type="password" class="form-control" id="password" value={password} 
                onChange={(e) => setPassword(e.target.value)} required />
              <div class="invalid-feedback">
                  Your password is required.
                </div>
              </div>
            </div>

            
          </div>

          <hr class="my-4" />

          <button class="w-100 btn btn-primary btn-lg" type="submit" onClick={registerUser}>Continue to checkout</button>
        </form>
      </div>
      </div>


        </>
        
    )
    
}
export default Register;