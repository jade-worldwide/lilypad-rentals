const mongoose = require('mongoose');
let bcrypt = require('bcryptjs');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;


const Schema = mongoose.Schema;
// User Schema
const UserSchema = new Schema({
	password: {
		type: String
	},
	email: {
		type: String,
		match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
	},
	name: {
		type: String
	},
	phonenumber: {
		type: Number
	}
});

const User =  mongoose.model('User', UserSchema);

module.exports = User;

module.exports.createUser = function (newUser, callback) {
	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(newUser.password, salt, function (err, hash) {
			newUser.password = hash;
			newUser.save(callback);
			console.log('Encrypted!');
		});
	});
}

module.exports.getUserByEmail = function (email, callback) {
	let query = { email: email };
	User.findOne(query, callback);
}

module.exports.getUserById = function (id, callback) {
	User.findById(id, callback);
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
		if (err) throw err;
		callback(null, isMatch);
	});
}

