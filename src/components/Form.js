import React from 'react';
import '../Stylesheets/login.css';
import '../Stylesheets/signup.css';
import Login from './login'


class Form extends React.Component {
    render() {
        return (
            <div className="Login">
                <div className="LoginDiv">                   
                    <Login />
                </div>
            </div>
        );
    }
}

export default Form;