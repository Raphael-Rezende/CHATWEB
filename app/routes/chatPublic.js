module.exports = function (app) {
    app.get('/chatPublic', function (req, res, next) {
        res.render('chat/chatPublic');
    });

}