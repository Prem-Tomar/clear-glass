const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('../../../db')
class Client extends Model { }

Client.init({
    id: {
        type: DataTypes.MEDIUMINT,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrementIdentity: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    sequelize: db, modelName: 'clients', timestamps: false
});

module.exports = Client;