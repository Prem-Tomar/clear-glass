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

// const Costs = db.define(
//     'costs', {
//     id: {
//         type: DataTypes.MEDIUMINT,
//         unique: true,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false

//     },
//     amount: {
//         type: DataTypes.DECIMAL,
//         allowNull: false
//     },
//     project_id: {
//         type: Projects,
//         allowNull: false,
//         field: 'project_id'
//     },
//     cost_type_id: {
//         type: CostTypes,
//         allowNull: false,
//         field: 'cost_type_id'
//     }
// }, {
//     timestamps: false
// }
// )
// Costs.belongsTo(Projects)
// Costs.belongsTo(CostTypes)


module.exports = Costs