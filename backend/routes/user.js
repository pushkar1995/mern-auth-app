const express = require('express')

// controller functions
const { signupUser, loginUser } = require('../controllers/userController')

const router = express.Router()

// Login Route
router.post('/login', loginUser)

// Signup Route
router.post('/signup', signupUser)

module.exports = router