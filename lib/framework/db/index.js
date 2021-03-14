const { Sequelize } = require('sequelize')
const dbName = process.env.DB_NAME;
const userName = process.env.DB_USER;
const password = process.env.DB_PASS
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const dialect = process.env.DB_DIALECT

const sequelize = new Sequelize(dbName, userName, password, {
    host, port, dialect, logging: false
})


sequelize.authenticate().then((res) => {
    console.log('Connection to database has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

module.exports = sequelize;