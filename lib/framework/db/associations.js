const db = require("./index")
const Client = require("../../clients/repositories/models/clients")
const Costs = require("../../costs/repositories/models/costs")
const CostTypes = require("../../cost_types/repositories/models/cost-types")
const Projects = require("../../projects/repositories/models/projects")


let activate = () => {
    // CostTypes.hasMany(CostTypes, { as: 'children', foreignKey: 'parent_id' })
    CostTypes.belongsToMany(Projects, { through: Costs, foreignKey: 'cost_type_id' })
    Projects.belongsToMany(CostTypes, { as: 'children', through: Costs, foreignKey: 'project_id' })
    Client.hasMany(Projects, { as: 'children', foreignKey: 'client_id' })
}

module.exports = {
    activate
}