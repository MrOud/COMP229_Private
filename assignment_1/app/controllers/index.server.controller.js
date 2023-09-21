exports.render = function(req, res) {

    if (req.session.lastVisit) {
        console.log(req.session.lastVisit)
    }

    console.log("old value:", req.session.lastVisit)
    req.session.lastVisit = new Date()
    console.log("new value:", req.session.lastVisit)
    res.render('index', {
        pageName: 'Home'
    })
}