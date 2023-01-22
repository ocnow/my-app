import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


function Login() {
    const [name , setName] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    const buttonAction = (e) => {
        e.preventDefault();
        //console.log("hellow world!!");
        var data = {'uname' : name}
        
        navigate('logined',{state : data})
    }

    return (
        <div className="AppPage">
            <img src={logo} className="App-logo" alt="logo" />
            <form onSubmit={buttonAction}>
                <h1>Login Page</h1>
                <label htmlFor="uname"> User Name </label>
                <input value={name} onChange={(e) => setName(e.target.value)} id="uname" type="text" placeholder="userName"/> <br/>
                <label htmlFor="pwd"> password </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} id="pwd" type="password" placeholder="password"/> <br/>
                <button type="submit" value="Submit"> Submit </button>
            </form>
        </div>
    );
}
    
export default Login;