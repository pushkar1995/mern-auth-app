const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '30d'})
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // Create  a token
    const token = createToken(user._id)

    return res.status(200).json({email, token})
  } catch (error)  {
    return res.status(400).json({error: error.message})
  }

  // res.json({mssg: 'login user'})
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    // Create  a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error)  {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }