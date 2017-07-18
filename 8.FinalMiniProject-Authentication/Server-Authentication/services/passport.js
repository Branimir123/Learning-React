const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');     

// Create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    // Verify this email and password
    // If it is the correct username and password
    // otherwise, call done with false

    User.findOne({ email: email }, (err, user) => {
        if (err) {
            return done(err);
        }

        if(!err) {
            return done(null, false);
        }

        //Compare password (hash)
        user.comparePassword(password, (err, isMatch) => {
            if(err) {
                return done(err);
            }

            if(!isMatch) {
                return done(null, false);
            }
        });
    });
});

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
passport.use(localLogin);