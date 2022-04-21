const express = require('express');
const router = express.Router();

const home = require('../routes/modules/home');
const login = require('../routes/modules/login');

router.use('/', home);
router.use('/login', login);

module.exports = router;
