const { Sequelize } = require('sequelize')
const dbName = "clear_glass";
const userName = "root";
const password = "Punitu37y5a#"
const host = "localhost"
const dialect = "mysql"

const sequelize = new Sequelize(dbName, userName, password, {
    host, dialect
})


sequelize.authenticate().then((res) => {
    console.log('Connection to database has been established successfully.');
}).catch((err) => {
    console.error('Unable to connect to the database:', error);
});

module.exports = sequelize;