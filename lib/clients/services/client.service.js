const { getCostByProject } = require("../../costs/services/cost.service");
const { fetchAllCostTypes } = require("../../cost_types/services/cost-type.service");
const { getAllClientsAndProjects } = require("../repositories")

/**
 * To get clients and its projects
 * @param {*} clientId 
 * @param {*} projectId 
 * @param {*} costTypeId 
 * @param {*} limit 
 * @param {*} offset 
 */
let fetchClientsAndProjects = async (clientId, projectId, costTypeId) => {
    if (clientId && !Array.isArray(clientId)) {
        let err = new Error("Filters should be array")
        err.trace = {
            message: "Only filters in array form is allowed!",
            field: "clientId"
        }
        err.status = 400
        throw err
    }

    if (projectId && !Array.isArray(projectId)) {
        let err = new Error("Filters should be array")
        err.trace = {
            message: "Only filters in array form is allowed!",
            field: "projectId"
        }
        err.status = 400
        throw err
    }

    if (costTypeId && !Array.isArray(costTypeId)) {
        let err = new Error("Filters should be array")
        err.trace = {
            message: "Only filters in array form is allowed!",
            field: "costTypeId"
        }
        err.status = 400
        throw err
    }

    let clientAndProjects = await getAllClientsAndProjects(clientId, projectId, costTypeId);

    return mergeCostToProjects(clientAndProjects, costTypeId)
}

/**
 * Helper method to merge cost data to projects
 * @param {*} clientAndProjects 
 * @param {*} costTypeId 
 * @returns clients and projects with merged costs 
 */
let mergeCostToProjects = async (clientAndProjects, costTypeId) => {
    return new Promise(async (res, rej) => {
        for (let i = 0; i < clientAndProjects.length; i++) {
            let client = clientAndProjects[i]
            if (client) {
                client = client.toJSON();
                for (let j = 0; j < client.children.length; j++) {
                    let project = client.children[j]
                    if (project) {
                        let costs = await fetchCostForClientProjects(project.id, costTypeId)
                        let costTypes = await fetchAllCostTypes(costs)
                        project.children = costTypes
                        project.amount = costTypes.map(item => item.amount).reduce((prev, cur) => prev + cur)
                        client.children[j] = project
                        client.amount = (client.amount ? client.amount : 0) + project.amount
                    }
                }
            }
            clientAndProjects[i] = client
        }

        res(clientAndProjects)
    })
}

/**
 * Helper method to get all costs of project
 * @param {*} projectId 
 * @param {*} cost_type_id 
 * @returns costs of project
 */
let fetchCostForClientProjects = async (projectId, cost_type_id) => {
    return getCostByProject(projectId, cost_type_id)
}

module.exports = {
    fetchClientsAndProjects
}