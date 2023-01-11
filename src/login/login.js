import logo from '../logo.svg';

function LoginButton(){
    return (
        <button className="loginButton" onClick={loginUser}> Login</button>
    )
}

function loginUser(){
    console.log("User logged in!")
}

function Login(){
    var Text = "text";
    var password = "password";
    return (
        <div className="AppPage">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Login Page</h1>
                <label htmlFor="uname"> User Name </label>
                <input id="uname" type={Text} placeholder="userName"/> <br/>
                <label htmlFor="pwd"> password </label>
                <input id="pwd" type={password} placeholder="password"/> <br/>
                <LoginButton />
        </div>
    );
}

export default Login;