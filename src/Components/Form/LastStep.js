import { CircularProgress, Fade } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { createNewUser, createProject, updateAccount, updateProfile } from 'Services/Api/api';
import { useStateValue } from 'Services/StateProvider/StateProvider';

function LastStep({formName}) {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [{user, profile, account, post}, dispatch] = useStateValue();

    useEffect(() => {
        submitForm();
    },[])

    const submitForm = async () => {
        switch (formName) {
            case 'JOIN':
                console.log("join")
                try {
                    await updateProfile(user, profile)
                    await updateAccount(user, account)
                } catch (error) {
                    setError(error.message)
                }
            case 'POST':
                await createProject(user, post)
                .then((res) => {
                    alert("File Upload Success")
                    setLoading(false)
                })
                .catch((error) => {
                    setError(error.message)
                })
                // console.log(post)
            default:
                // console.log("default")
                setLoading(false)
        }
    }
    return (
        <div className="lastStep">
            {loading ? (
                <div className="lastStep__loading">
                    <Fade
                        style={{
                            transitionDelay: loading ? '800ms' : '0ms',
                        }}
                        unmountOnExit
                    >
                        <CircularProgress />
                    </Fade>
                </div>
            ): (
                <div className="lastStep__complete">
                    <h1>완료!</h1>
                    <button onClick={() => history.push("/")}>ok!</button>
                </div>
            )}
        </div>
    )
}

export default LastStep
