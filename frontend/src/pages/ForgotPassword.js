import React from 'react'

const ForgotPassword = () => {
  return (
    <form className='forgotPassword'>
        <h3>Forgot Password</h3>

        <label>Email:</label>
        <input 
            type="email"
            // onChange={(e) => setEmail(e.target.value)}
            // value={email}
        />
        <button>Send Link</button>
    </form>
  )
}

export default ForgotPassword