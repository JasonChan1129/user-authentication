const db = require('../../configs/mongoose');
const users = require('../../users');
const User = require('../Users');

db.once('open', () => {
	users.forEach((user, index) => {
		User.create({ id: index + 1, ...user });
	});
	console.log('done');
});
