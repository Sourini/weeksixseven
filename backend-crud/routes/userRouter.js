const express = require('express');
const router = express.Router();
const {
  loginUser,
  signupUser,
} = require('../controllers/userControllers');

// POST /api/signupUser
router.post('/signup', signupUser);

// POST /api/loginUser
router.post('/login', loginUser);

module.exports = router;
