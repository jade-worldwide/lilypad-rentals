const mongoose = require('mongoose');
let bcrypt = require('bcryptjs');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;


const Schema = mongoose.Schema;
// User Schema
const UserSchema = new Schema({
	username: {
		type: String,
		index: true
	},
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

module.exports.getUserByUsername = function (username, callback) {
	let query = { username: username };
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

passport.use(new LocalStrategy(
	function (username, password, done) {
		User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

	passport.deserializeUser(function (id, done) {
		User.getUserById(id, function (err, user) {
			done(err, user);
		});
	});

	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});
	
	module.exports.loginUser = function (req, res) {
			passport.authenticate('local', { successRedirect: '/', failureRedirect: '/results', failureFlash: true }),
		function (req, res) {
			res.redirect('/');
		}
	}
