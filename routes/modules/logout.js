const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.clearCookie('session_id');
	return res.redirect('/');
});

module.exports = router;
