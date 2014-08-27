var express = require('express'),
	path = require('path'),
    logger = require('morgan');
    //devs = require('./routes/thedevs');
    
var app = express();

//Set port
// app.set('port', process.env.PORT || 80);

// all environments
var port = process.env.VMC_APP_PORT || 3000;
var host = process.env.VCAP_APP_HOST || 'localhost';
app.set('port', process.env.PORT || port);


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

//app.get('/devs/:id', devs.findById);

app.listen(app.get('port'), function() {
	console.log("Listening at port" + app.set('port'));
});
