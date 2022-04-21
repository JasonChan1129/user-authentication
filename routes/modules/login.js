const express = require('express');
const User = require('../../models/Users');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('login');
});

router.post('/', (req, res) => {
	const { email, password } = req.body;
	User.findOne({ email, password })
		.lean()
		.then(user => {
			return user ? res.render('home', { user }) : res.render('error');
		})
		.catch(error => console.log(error));
});

module.exports = router;
