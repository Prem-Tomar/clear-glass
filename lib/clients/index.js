const { SendSuccessResponse } = require("../common/wrappers/response.wrapper")
const { fetchClientsAndProjects } = require("./services/client.service")

let getClientAndCosts = async (body) => {

    return SendSuccessResponse(fetchClientsAndProjects(body.clientId, body.projectId, body.costTypeId));
}

module.exports = { getClientAndCosts }