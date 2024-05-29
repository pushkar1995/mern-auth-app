import React, { useState } from 'react'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const ResetPassword = () => {
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('/api/user/reset-password', {
            password,
        }).then(response => {
            if(response.data.status) {
                navigate('/login')
            }
        }).catch(err => {
            console.log(err)
        })
    }

  return (
    <form className='resetPassword' onSubmit={handleSubmit}>
        <h3>Reset Password</h3>

        <label>New Password:</label>
        <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*******"
            // value={email}
        />
        <button type='submit'>Reset</button>
    </form>
  )
}

export default ResetPassword