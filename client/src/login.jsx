import React, { Component } from "react";
//import { Link } from "react-router-dom";

import "./signin.css";

class Login extends Component {
  render() {
    return (
            <React.Fragment>
                <main className="form-signin">
                <form>
                    
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div >
                    <label htmlFor="floatingInput">Email address</label>
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    
                    </div>
                    <div >
                    <label htmlFor="floatingPassword">Password</label>
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    
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