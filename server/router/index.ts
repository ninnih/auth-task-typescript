const express = require('express');
const UserController = require('../controller/userController');
const ProfileController = require('../controller/profileController')
const router = express.Router();

router.post('/register', UserController.registrationController)
router.post('/login', UserController.loginController)
router.post('/profile', ProfileController.updateProfileController)

module.exports = router;
