module.exports = function(app) { 
	var contact = require('../controllers/contact.server.controller'); 
	app.get('/contact', contact.render); 
	app.post('/contact', contact.render)
};
