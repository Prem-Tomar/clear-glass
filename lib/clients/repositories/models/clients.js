const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../../../framework/db');
const Projects = require('../../../projects/repositories/models/projects');
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
            return 'client'
        }
    }
}, {
    sequelize: db, modelName: 'clients', timestamps: false
});

// const Client = db.define('clients', {
//     id: {
//         type: DataTypes.MEDIUMINT,
//         allowNull: false,
//         unique: true,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         unique: true
//     }
// }, { timestamps: false })



module.exports = Client;