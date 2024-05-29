const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

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

// forgot password
const forgotPassword = async (req, res) => {
  const {email} = req.body;
  try {
    const user = await User.findOne({ email })

    // Create  a token
    const token = createToken(user._id)

    if(!user) {
      return res.json({message: "User not registered!!!"})
    }

    //Using nodemailer to send the email
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pushkargautam993@gmail.com',
        pass: 'mbct pkyo pydw etje'
      }
    });
    const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E");
    var mailOptions = {
      from: 'pushkargautam993@gmail.com',
      to: email,
      subject: 'Reset Password',
      text: `http://localhost:3000/resetPassword/${encodedToken}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        return res.json({ message: "Error sending email!!"})
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  } catch(err) {
    console.log(err)
  }
}

// forgot password
const resetPassword = async (req, res) => {
}

module.exports = { signupUser, loginUser, forgotPassword, resetPassword }