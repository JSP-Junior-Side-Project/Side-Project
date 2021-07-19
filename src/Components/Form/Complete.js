import axios from 'axios'
import moment from 'moment'
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { ACCOUNT_API_ENDPOINT, USER_API_ENDPOINT } from 'Services/Api/Endpoint'
import { useStateValue } from 'Services/StateProvider/StateProvider'

function Complete() {
    const history = useHistory();
    const [{user, profile, account}, dispatch] = useStateValue()
    const [error, setError] = useState()

    const updateProfile = async () => {
        try {
            await axios.put(`${USER_API_ENDPOINT}/${user.uid}`, {
                ...profile,
                created_at: moment().format("YYYY-MM-DD")
            })
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }
    }

    const updateAccount = async () => {
        try {
            await axios.put(`${ACCOUNT_API_ENDPOINT}/${user.uid}`, {
                ...account,
                created_at: moment().format("YYYY-MM-DD")
            })
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }
    }
    const handleClick = async () => {
        await updateProfile()
        await updateAccount()
        history.push("./")
    }
    return (
        <div className="complete">
            <h1>complete!</h1>
            <button className="complete__redirect" onClick={handleClick}>확인</button>
        </div>
    )
}

export default Complete
