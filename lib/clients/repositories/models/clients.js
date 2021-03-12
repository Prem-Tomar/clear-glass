const { Sequelize, Model, DataTypes } = require('sequelize');
const CostTypes = require('../../../cost_types/repositories/models/cost-types');
const db = require('../../../db')
class Client extends Model { }

Client.init({
    id: {
        type: DataTypes.MEDIUMINT,
        allowNull: false,
        unique: true,
        primaryKey: true,
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