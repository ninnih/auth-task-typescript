const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
import mongoose from 'mongoose';
const User = mongoose.model('users');
import { key } from '../config/keys';
const opts: any = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.secretOrKey;

module.exports = passport => {
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
			User.findById(jwt_payload.id).then(user => {
				if(user) {
					return done(null, user);
				}
				return done(null, false);
			})
			.catch(err => console.log(err))
		})
	)
}