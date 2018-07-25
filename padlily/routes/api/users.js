let express = require('express');
let router = express.Router();
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;

let User = require('../../models/User');


// Register User
router.post('/register', function (req, res) {
	let email = req.body.email;
	let name = req.body.name;
	let phonenumber = req.body.phonenumber;
	let password = req.body.password;

	if (!name) {
		console.log("Errors");
	}
	else {
		//checking for email and username are already taken
			User.findOne({ email: { 
				"$regex": "^" + email + "\\b", "$options": "i"
		}}, function (err, mail) {
				if ( mail ) {
					res.render('register', {
						mail: mail
					});
				}
				else {
					let newUser = new User({
						name: name,
						email: email,
						phonenumber: phonenumber,
						password: password
						
					});

					User.createUser(newUser, function (err, user) {
						if (err) throw err;
						console.log(user);
					});

         	req.flash('success_msg', 'You are registered and can now login');
					res.redirect('/users/login');
				}
			});
	}
});

passport.use(new LocalStrategy({
	usernameField: 'email'
	},
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

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

// router.post('/login',
// 	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/YOU_FAILED_SCRUB', failureFlash: true }),
// 	function (req, res) {
// 		console.log(req.user, '---should contain user token or info')
// 		res.send(req.user);
// 	});

router.post('/login', function(req, res, next) {
	passport.authenticate('local', function(err, {email, phonenumber, _id, name}) {
		if(err) {
			return res.sendStatus(401);
		}
		res.send({success: true, user: {email, phonenumber, _id, name} })
		
	})(req, res, next)
})

router.get('/authenticated', (req, res) => {
	console.log(req.cookies, req.cookies.session, req.user)
	if(req.cookies.session) {
		res.send({success: true});
	} else {
		res.send(null)
	}
})

router.post('/logout',  (req, res) => {
	req.logout();
	res.send({success: true})
});

module.exports = router;