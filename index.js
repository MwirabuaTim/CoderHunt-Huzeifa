var express = require('express'),
	path = require('path'),
    logger = require('morgan'),
    everyauth = require('everyauth'),
    devs = require('./routes/thedevs');
    
var app = express();

//Set port
app.set('port', process.env.PORT || 5205);
     
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/devs/:id', devs.findById);

app.listen(app.get('port'), function() {
	console.log("Listening at port" + app.set('port'));
});