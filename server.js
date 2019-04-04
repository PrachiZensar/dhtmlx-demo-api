var express = require('express');
var moment = require('moment');
var bodyParser = require('body-parser');
// var cookieParser  = require('cookie-parser');
// var jwt = require('jsonwebtoken');
// var fs = require("fs");
//test
var app = express();

// var appHelpers = {};
app.use(express.static(__dirname + '/static'));

// app.route('/api/login')
//     .post(loginRoute);

// const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/getUnreadNotificationCount/:id', function(req, res, next) {
	res.send({
	   "msg": "count",
	   "success": true,
		"data":4
	});
});

app.listen(process.env.PORT || 8000);
