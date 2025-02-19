import React, { Component } from "react";
import '../prettify.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <form>
                <h1 className="loginheader">Log In to BookBit</h1>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email" />
                    <div className="separate"></div>
                    <input type="password" className="form-control" placeholder="Enter password" />
                    <div className="separate"></div>
                    <button type="submit" className="btn btn-success btn-large w-100">Login</button>
                    <div className="separate"></div>
                </div>
                <p className="or">OR</p>
                <div className="form-group">
                    <Link to="/auth"><button type="button" className="btn btn-warning btn-large w-100">Placeholder for GitHub OAuth</button></Link>
                    <div className="separate"></div>
                    <Link to="/auth"><button type="button" className="btn btn-warning btn-large w-100">Placeholder for Google OAuth</button></Link>
                    <div className="separate"></div>
                    <div className="separate"></div>
                </div>
                <div className="separate"></div>
                <div className="separate"></div>
                <div className="separate"></div>
                <p className="forgot-password text-right">
                    Can't log in? | <Link to="/signup">Sign up here.</Link>
                </p>
            </form>
        );
    }
}

export default Login;