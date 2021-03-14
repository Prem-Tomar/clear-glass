const { getAllCostTypes } = require("../repositories")

let fetchAllCostTypes = async (costForProject) => {
    return getAllCostTypes(costForProject)
}

module.exports = {
    fetchAllCostTypes
}