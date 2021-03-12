const { Sequelize, Model, DataTypes } = require("sequelize/types");
const Client = require("../../../clients/repositories/models/clients");
const db = require('../../../db')
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
        allowNull: false
    }
}, {
    sequelize: db, modelName: 'projects', timestamps: false
})

Projects.belongsTo(Client, { foreignKey: 'client_id' })

module.exports = Projects;