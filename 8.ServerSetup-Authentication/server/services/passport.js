const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeader('authorization'),
    secretOrKey: config.secret
};

// Create JWT Strategy 
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    // See if the user ID in the payload exists in the db 
        // If yes call done with the user object
        // If NO call done withOUT the use object

        User.findById(payload.sub, () => {
            if(err){
                return done(err, false);
            }
            
            if(user) {
                return done(null, user);
            } else {
                return done(null, false); 
            }
        });
});

// Tell passport to use this strategy
passport.use(jwtLogin);