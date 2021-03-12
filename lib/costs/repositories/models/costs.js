const { Sequelize, Model, DataTypes } = require('sequelize')
const CostTypes = require('../../../cost_types/repositories/models/cost-types')
const db = require('../../../db')

class Costs extends Model { }

Costs.init({
    id: {
        type: DataTypes.MEDIUMINT,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    project_id: {
        type: DataTypes.MEDIUMINT,
        allowNull: false
    },
    cost_type_id: {
        type: DataTypes.MEDIUMINT,
        allowNull: false
    }
}, {
    sequelize: db, modelName: 'costs', timestamps: false
})



Costs.belongsTo(CostTypes, { foreignKey: 'cost_type_id' })

module.exports = Costs