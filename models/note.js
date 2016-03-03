var db = require('./index')

var note = db.sequelize.define('note', {
	message: {
		type: db.Sequelize.STRING,
		allowNull: false
	}
});

module.exports = note;