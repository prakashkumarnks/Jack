var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const Model = require('./Model/QueryDb');
let Db = new Model();

// var common = require('./common');
var app = express();


app.use(bodyParser.json());
app.use(express.static('public'));

app.use(function (req, res, next) {
	/*
	  * var err = new Error('Not Found'); err.status = 404; next(err);
	  */

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

	// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,
	// Content-Type, Accept");

	// Pass to next layer of middleware
	next();
});



app.get('/bind_time', function (req, res) {
	var sql = "SELECT * FROM bind_time where IsActive = 1;";
	Db.query(sql).then(rows => {
		res.send({ bind_time : rows});
	});
});


app.get('/a', function (req, res) {
	var commonobj = new common();
	var s = commonobj.InsertDateFormat("9.9.2017");
	var v = commonobj.DispDateFormat("2017.9.9");
	res.send({ InsertDateFormat: s, DispDateFormat: v });
});




const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`listening on ${PORT}`))