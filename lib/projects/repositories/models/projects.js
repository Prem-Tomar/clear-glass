const { Sequelize, Model, DataTypes } = require("sequelize");
const Costs = require("../../../costs/repositories/models/costs");
const CostTypes = require("../../../cost_types/repositories/models/cost-types");
const db = require('../../../framework/db')
class Projects extends Model { }

Projects.init({
    id: {
        type: DataTypes.MEDIUMINT,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    client_id: {
        type: DataTypes.MEDIUMINT,
        allowNull: false,
        field: 'client_id'
    },
    amount: {
        type: Sequelize.VIRTUAL,
        defaultValue: 0,
        get() {
            return this.getDataValue('amount')
        },
        set(value) {
            this.setDataValue('amount', value)
        }
    },
    type: {
        type: DataTypes.VIRTUAL,
        get() {
            return 'project'
        }
    }
}, {
    sequelize: db, modelName: 'projects', timestamps: false
})


module.exports = Projects;