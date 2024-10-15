const express = require('express');
const { register, login, validateToken } = require('../controllers/authController');
const validateRequest = require('../middleware/validateRequest');
const { registerSchema, loginSchema } = require('../schemas/authSchemas');

const router = express.Router();

router.post('/register', validateRequest(registerSchema), register);
router.post('/login', validateRequest(loginSchema), login);
router.post('/validate-token', validateToken);

module.exports = router;
