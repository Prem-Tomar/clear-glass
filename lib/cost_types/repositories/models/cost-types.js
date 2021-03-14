const { Sequelize, Model, DataTypes } = require('sequelize')
const db = require('../../../framework/db')

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
        allowNull: true,
        field: 'parent_id'
    },
    type: {
        type: DataTypes.VIRTUAL,
        get() {
            return 'cost'
        }
    },
    amount: {
        type: DataTypes.VIRTUAL,
        defaultValue: 0,
        get() {
            return this.getDataValue('amount')
        },
        set(value) {
            this.setDataValue('amount', value)
        }
    },
    children: {
        type: DataTypes.VIRTUAL
    }

}, {
    sequelize: db, modelName: 'cost_types', timestamps: false
})

module.exports = CostTypes