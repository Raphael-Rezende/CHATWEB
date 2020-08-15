module.exports = function (app) {
    app.get('/chatPublic', function (req, res) {
        res.render('chat/chatPublic');
    });

}