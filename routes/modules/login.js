const express = require('express');
const User = require('../../models/Users');
const Session = require('../../session');
const generateSessionID = require('../../utlis/generateSessionID');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('login');
});

router.post('/', (req, res) => {
	const { email, password } = req.body;
	User.findOne({ email, password })
		.lean()
		.then(user => {
			// if user's email and password are correct, create a session data and plant the session_id in cookies
			if (user) {
				const sessionID = generateSessionID();
				Session[sessionID] = { user_id: user.id };
				res.cookie('session_id', sessionID);
			}
			return user ? res.render('home', { user }) : res.render('error');
		})
		.catch(error => console.log(error));
});

module.exports = router;
