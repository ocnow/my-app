import React from 'react';
import { useLocation } from 'react-router';

function PostLogin(){
    const {state} = useLocation();
    console.log(state)
    return (
        <h1>Welcome the application {state.uname}</h1>
    );
}

export default PostLogin;