const { QueryTypes } = require("sequelize")
const CostTypes = require("../../cost_types/repositories/models/cost-types")
const { Sequelize } = require("../../framework/db")
const Projects = require("../../projects/repositories/models/projects")
const Client = require("./models/clients")

let getAllClientsAndProjects = async (clientId, projectId, costTypeId) => {
    let projectAttributes = [['title', 'name'], 'id', 'amount', 'type']
    let clientWhereClause = {}
    let projectWhereClause = {}
    let costTypeWhereClause = {}
    if (clientId)
        clientWhereClause.id = clientId
    if (projectId)
        projectWhereClause.id = projectId
    if (costTypeId)
        costTypeWhereClause.id = costTypeId
    return Client.findAll({
        where: clientWhereClause,
        order: [['id', 'ASC']],
        include: [
            {
                model: Projects,
                as: 'children',
                where: projectWhereClause,
                attributes: projectAttributes,
                include: [{
                    model: CostTypes,
                    as: 'children',
                    where: costTypeWhereClause
                }]
            }
        ]
    })
}

module.exports = {
    getAllClientsAndProjects
}