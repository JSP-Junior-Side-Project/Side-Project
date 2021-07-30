import React from 'react'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { authService } from 'Services/myBase';
// import 'Pages/Login.css';

function Login() {
    let provider;
    const history = useHistory();
    const [error, setError] = useState();

    const socialClick = async (event) => {
        const {target: {alt}} = event;
        // axios GET request for each social
        if (alt === "google") {
            try {
                provider = new authService.GoogleAuthProvider();
                await authService()
                .signInWithPopup(provider)
                
            } catch (error) {
                setError(error.message)
            }
        } else if (alt === "github") {

        } else if (alt === "kakaotalk") {

        } else if (alt === "naver") {

        }
    }

    const joinClick = () => {
        history.push("/join");
    }

    return (
        <div className="login">
            <h1 className="login__header">SIDE-PROJECT</h1>
            <h4>간편하게 로그인하세요!</h4>
            <div className="login__social">
                <div className="login__socialButton" onClick={socialClick} style={{backgroundColor:"#EA4435"}}>
                    <img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/icon_google.png" alt="google"></img>
                </div>
                <div className="login__socialButton" onClick={socialClick} style={{backgroundColor:"#FFFFFF"}}>
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github"></img>
                </div>
                <div className="login__socialButton" onClick={socialClick} style={{backgroundColor:"#FAE100"}}>
                    <img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/icon_kakao.png" alt="kakaotalk"></img>
                </div>
                <div className="login__socialButton" onClick={socialClick} style={{backgroundColor:"#04CF5B "}}>
                    <img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/icon_naver.png" alt="naver"></img>
                </div>
            </div>
            <p>계정이 없다면...</p>
            {/* <button className="login__join" onClick={joinClick}>회원가입!</button> */}
            <div className="login__join" onClick={joinClick}>
                <p>회원가입!</p>
            </div>
        </div>
    )
}

export default Login
