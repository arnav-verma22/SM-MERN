import React from "react";
import { useState } from 'react'

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
            <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-4 position-relative">
                    <label for="validationTooltip01" className="form-label">Username</label>
                    <input type="text" className="form-control" id="validationTooltip01" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <div className="valid-tooltip">
                    Looks good!
                    </div>
                </div>
                <hr />
                <div className="col-md-4 position-relative">
                    <label for="validationTooltipUsername" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                        <input type="text" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend"
                        value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <div className="invalid-tooltip">
                            Please choose a unique and valid username.
                        </div>
                    </div>
                </div>
                <hr />
                <div className="col-md-4 position-relative">
                    <label for="validationTooltip02" className="form-label">Password</label>
                    <input type="password" className="form-control" id="validationTooltip02" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <div className="valid-tooltip">
                    Looks good!
                    </div>
                </div>
                
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={registerUser}>Submit form</button>
                </div>
                </form>
        </>
        
    )
    
}
export default Register;