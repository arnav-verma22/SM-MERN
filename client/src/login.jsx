import React, { Component } from "react";
//import { Link } from "react-router-dom";

import "./signin.css";

class Login extends Component {
  render() {
    return (
            <React.Fragment>
                <main className="form-signin">
                <form>
                    <img className="mb-4" src="logo4.png" alt="" width="72" height="72" align="center" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                    
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                    
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                    </div>
                    <button className="btn btn-outline-success" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
                </main>

            </React.Fragment>
        );
    }
}
  
  export default Login;