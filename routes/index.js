const express = require('express');
const router = express.Router();

const home = require('../routes/modules/home');
const login = require('../routes/modules/login');
const logout = require('../routes/modules/logout');

router.use('/', home);
router.use('/login', login);
router.use('/logout', logout);

module.exports = router;
