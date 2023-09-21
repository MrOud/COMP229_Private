exports.render = function(req, res) {

    if (req.session.lastVisit) {
        console.log(req.session.lastVisit)
    }

    res.render('services', {
        pageName: 'Services'
    })
}