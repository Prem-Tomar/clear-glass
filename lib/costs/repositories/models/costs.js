const { Sequelize, Model, DataTypes } = require('sequelize')
const CostTypes = require('../../../cost_types/repositories/models/cost-types')
const db = require('../../../framework/db')
const Projects = require('../../../projects/repositories/models/projects')

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
        allowNull: false,
        field: 'project_id'
    },
    cost_type_id: {
        type: DataTypes.MEDIUMINT,
        allowNull: false,
        field: 'cost_type_id'
    }
}, {
    sequelize: db, modelName: 'costs', timestamps: false
})


module.exports = Costs