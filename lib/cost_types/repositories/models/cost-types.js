const { Sequelize, Model, DataTypes } = require('sequelize')
const Client = require('../../../clients/repositories/models/clients')
const Costs = require('../../../costs/repositories/models/costs')
const db = require('../../../db')

class CostTypes extends Model { }

CostTypes.init({
    id: {
        type: DataTypes.MEDIUMINT,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    parent_id: {
        type: DataTypes.MEDIUMINT,
        allowNull: true
    }

}, {
    sequelize: db, modelName: 'cost_types', timestamps: false
})

CostTypes.belongsTo(Client, { foreignKey: 'parent_id' })

module.exports = CostTypes