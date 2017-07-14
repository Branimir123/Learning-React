const router = (app) => {
    app.get('/', (req, res, next) => {
        res.send(['hi','there']);
    });
}

module.exports = router;