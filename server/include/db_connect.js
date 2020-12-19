var mysql = require('mysql');
class DbConnection {

	ConnectToDb() {
		var con = mysql.createConnection({
			host: 'localhost',
			user: 'prakash',
			password: 'prakash',
			database: 'jackpot',
			port: 3306
		});

		con.connect(function (err) {
			if (err) throw err;
			 console.log("Connected!");
		});
		return con;
	}

}
module.exports = DbConnection;