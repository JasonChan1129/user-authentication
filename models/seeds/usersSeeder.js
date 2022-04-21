const db = require('../../configs/mongoose');
const users = require('../../users');
const User = require('../Users');

db.once('open', () => {
	users.forEach(user => {
		User.create(user);
	});
	console.log('done');
});
