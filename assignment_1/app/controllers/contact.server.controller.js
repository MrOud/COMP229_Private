exports.render = function(req, res) {
    if (req.method=="POST") {
        res.render('message', {
            pageName: 'Message',
            messageBody: req.body
        })
    } else {
        res.render('contact', {
            pageName: 'Contact'
        })
    }
}