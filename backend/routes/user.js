const express = require('express')

// controller functions
const { loginUser, signupUser, forgotPassword, resetPassword } = require('../controllers/userController')

const router = express.Router()

// Login Route
router.post('/login', loginUser)

// Signup Route
router.post('/signup', signupUser)

// ForgotPassword Route
router.post('/forgot-password', forgotPassword)

// Reset Password Route
router.post('/reset-password/:token', resetPassword)

module.exports = router