import React from 'react';
import logo from '../logo.svg';

class LoginForm extends React.Component{
    constructor(){
        super();
    }

    LoginButton(){
        return (
            <button className="loginButton" > Login</button>
        )
    }

    loginUser(e){
        e.preventDefault();
        console.log("User logged in!")
        
    }

    render() {
        var Text = "text";
        var password = "password";
        return (
            <div className="AppPage">
                <img src={logo} className="App-logo" alt="logo" />
                <form onSubmit={this.loginUser}>
                    <h1>Login Page</h1>
                    <label htmlFor="uname"> User Name </label>
                    <input id="uname" type={Text} placeholder="userName"/> <br/>
                    <label htmlFor="pwd"> password </label>
                    <input id="pwd" type={password} placeholder="password"/> <br/>
                    <this.LoginButton />
                </form>
            </div>
        );
    }

}

export default LoginForm;