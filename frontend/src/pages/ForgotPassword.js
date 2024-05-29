import React, { useState } from 'react'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('/api/user/forgot-password', {
            email,
        }).then(response => {
            if(response.data.status) {
                alert("Check your email for reset password link")
                navigate('/login')
            }
        }).catch(err => {
            console.log(err)
        })
    }

  return (
    <form className='forgotPassword' onSubmit={handleSubmit}>
        <h3>Forgot Password</h3>

        <label>Email:</label>
        <input 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            value={email}
        />
        <button type='submit'>Send Link</button>
    </form>
  )
}

export default ForgotPassword