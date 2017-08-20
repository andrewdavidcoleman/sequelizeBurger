// I don't think I need this file. I think Sequelize takes care of my connection for me via the sequelize.sync method in server.js, and the config.json file.





// established mySQL connection
// var mysql = require("mysql");
//
// var connection;
//
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'burgers_db'
//   });
// };
//
// // Make connection.
// connection.connect();
//
// // Export connection for our ORM to use.
// module.exports = connection;
