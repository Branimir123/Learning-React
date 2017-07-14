/* Router */
const AuthenticationController = require('./controllers/authentication');

const router = (app) => {
    app.post('/signup', AuthenticationController.signup)
}

module.exports = router;