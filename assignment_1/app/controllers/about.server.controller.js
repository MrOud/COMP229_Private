let jsonData = require('../json/aboutPage.json')

exports.render = function(req, res) {
    res.render('about', {
        pageName: 'About',
        data: jsonData
    })
}