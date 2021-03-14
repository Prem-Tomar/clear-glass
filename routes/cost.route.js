const express = require('express')
const { getClientAndCosts } = require('../lib/clients')
const Controller = require('../lib/framework/controller/controller')
const router = express.Router()

let ClientController = new Controller({
    getClients: getClientAndCosts
}, {
    getClients: {
        schema: "../validators/client-request.validator.json"
    }
})

router.post('/clients', ClientController.getClients)

module.exports = router

