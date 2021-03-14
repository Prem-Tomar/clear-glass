const Costs = require("../repositories/models/costs")

let getCostByProject = async (projectId, cost_type_id) => {

    let whereClause = {
        project_id: projectId
    }

    if (cost_type_id)
        whereClause.cost_type_id = cost_type_id

    return Costs.findAll({
        where: whereClause,
        order: [
            ['cost_type_id', 'ASC']
        ]
    })

}

module.exports = {
    getCostByProject
}