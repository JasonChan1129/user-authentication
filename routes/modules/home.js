const express = require('express');
const router = express.Router();
const Session = require('../../session');
const User = require('../../models/Users');

router.get('/', async (req, res) => {
	try {
		const sessionID = req.cookies.session_id;
		const userSession = Session[sessionID];
		if (userSession) {
			const user = await User.findOne({ id: userSession.user_id }).lean();
			if (user) {
				return res.render('home', { user });
			} else {
				return res.render('home');
			}
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
