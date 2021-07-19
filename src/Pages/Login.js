import React from 'react'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { authService } from 'Services/myBase';

function Login() {
    let provider;
    const history = useHistory();
    const [error, setError] = useState();

    const socialClick = async (event) => {
        const {target: {name}} = event;

        // axios GET request for each social
        if (name === "google") {
            try {
                provider = new authService.GoogleAuthProvider();
                await authService()
                .signInWithPopup(provider)
                
            } catch (error) {
                setError(error.message)
            }
        } else if (name === "github") {

        } else if (name === "kakaotalk") {

        } else if (name === "naver") {

        }
    }

    const joinClick = () => {
        history.push("/join");
    }

    return (
        <div className="login">
            <h1>Welcome Back</h1>
            <div className="login__social">
                {/* google login */}
                <button name="google" onClick={socialClick}>Google</button>
                {/* github login */}
                <button name="github" onClick={socialClick}>Github</button>
                {/* kakaotalk login */}
                <button name="kakaotalk" onClick={socialClick}>Kakaotalk</button>
                {/* naver login */}
                <button name="naver" onClick={socialClick}>Naver</button>
            </div>
            <h3>or</h3>
            <button className="login__join" onClick={joinClick}>JOIN</button>
        </div>
    )
}

export default Login
