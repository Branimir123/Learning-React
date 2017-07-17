/* Router */
const AuthenticationController = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const router = (app) => {
    app.get('/', requireAuth, (req, res) => {
        res.send({ hi: 'there' });
    });
    app.post('/signup', AuthenticationController.signup)
}

module.exports = router;