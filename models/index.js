var Sequelize = require('sequelize');
var sequelize = new Sequelize('notes_example_db', 'root', 'jigganick', {
	host: 'localhost',
	dialect: 'mysql'
});
var db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;