const express = require('express');
const User = require('../../models/Users');
const router = express.Router();

router.post('/', (req, res) => {
	const { email, password } = req.body;
	User.findOne({ email, password })
		.lean()
		.then(user => {
			return user
				? res.render('welcome', { user })
				: res.render('welcome', { error: 'Invalid username or password.' });
		})
		.catch(error => console.log(error));
});

module.exports = router;
