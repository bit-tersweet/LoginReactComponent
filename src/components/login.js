import React from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import '../Stylesheets/login.css';
import '../Stylesheets/signup.css';
import logo from "../Resources/logo.png";
import '../Stylesheets/signup.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userExists: true,
            email: undefined,
            username: undefined,
            password: undefined,
            passwordChecker: undefined
        };
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
    }


    validateEmail() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.state.email).toLowerCase());
    }

    validateForm() {
        if (this.validateEmail()) {
            if (this.state.password === undefined) return false;
            if (!this.state.userExists) {
                return (this.state.username !== undefined && this.state.passwordChecker === this.state.password) ?  true:false;
            }
            return true;
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSignUp() {
        this.setState({
            userExists: !this.state.userExists
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="loginP">
                    <img src={logo} alt="logo" width="40" className="logo" />
                    {
                        this.state.userExists ?
                            <FormGroup controlId="email" bsSize="large">
                                <FormControl
                                    placeholder="Email or username"
                                    autoFocus
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange} />
                            </FormGroup>
                            : <div>
                                <FormGroup controlId="email" bsSize="large">
                                    <FormControl
                                        placeholder="Email"
                                        autoFocus
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup controlId="username" bsSize="large">
                                    <FormControl
                                        placeholder="Username"
                                        autoFocus
                                        type="text"
                                        value={this.state.username}
                                        onChange={this.handleChange} />
                                </FormGroup>
                            </div>
                    }

                    <FormGroup controlId="password" bsSize="large">
                        <FormControl
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password" />
                    </FormGroup>
                    {
                        this.state.userExists ?
                            null :
                            <FormGroup controlId="passwordChecker" bsSize="large">
                                <FormControl
                                    placeholder="Confirm your password"
                                    value={this.state.passwordChecker}
                                    onChange={this.handleChange}
                                    type="password" />
                            </FormGroup>
                    }

                    {this.state.userExists ?
                        <div>
                            <Button
                                className="LoginBtn"
                                block
                                bsSize="large"
                                type="submit"
                                disabled={!this.validateForm()}> Login
                        </Button>
                            <div id="container2">
                                <span className="forgotPsw"><a href="#"> Forgot password?</a></span>
                            </div>
                        </div>
                        :
                        <Button
                            className="LoginBtn btn-primary"
                            block
                            bsSize="large"
                            type="submit"

                            disabled={!this.validateForm()}> Sign up
                    </Button>
                    }



                </form>
                {
                    this.state.userExists ?
                        <Router>
                            <div id="container">
                                <Link to="/signup"><button onClick={this.handleSignUp} type="button " id="signUp" className="btn btn-primary"> Haven't an account yet? Sign up </button></Link>
                                <Route path="/signup" />
                            </div>
                        </Router> : null
                }

            </div>
        );
    }
}

export default Login;