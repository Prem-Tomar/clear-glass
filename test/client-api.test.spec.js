const app = require('../bin/www')
const chai = require("chai");
const { expect } = chai
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const server = "http://localhost:3000"

describe('Client API test', () => {
    it('Check API health', async () => {
        let body = {}
        chai.request(server).post("/v1/api/clients").send(body).end((err, res) => {
            expect(res).to.have.status(200)
        })
    })

    it('Verify API success response with cost type id', async () => {
        let body = {
            costTypeId: [5]
        }
        chai.request(server).post("/v1/api/clients").send(body).end((err, res) => {
            expect(res).to.have.status(200)
        })
    })

    it('Verify API success response with project id', async () => {
        let body = {
            projectId: [10]
        }
        chai.request(server).post("/v1/api/clients").send(body).end((err, res) => {
            expect(res).to.have.status(200)
        })
    })

    it('Verify API success response with client id', async () => {
        let body = {
            clientId: [1]
        }
        chai.request(server).post("/v1/api/clients").send(body).end((err, res) => {
            expect(res).to.have.status(200)
        })
    })

    it('Verify API success response with client and project id', async () => {
        let body = {
            clientId: [1],
            projectId: [10]
        }
        chai.request(server).post("/v1/api/clients").send(body).end((err, res) => {
            expect(res).to.have.status(200)
        })
    })

    it('Verify API success response with client, cost and project id', async () => {
        let body = {
            clientId: [1],
            projectId: [10],
            costTypeId: [5]
        }
        chai.request(server).post("/v1/api/clients").send(body).end((err, res) => {
            expect(res).to.have.status(200)
        })
    })

    it('Check API integer validation errors', async () => {
        let body = {
            clientId: ["1"],
            costTypeId: ["1"],
            projectId: ["1"]
        }
        chai.request(server).post("/v1/api/clients").send(body).end((err, res) => {
            expect(res).to.have.status(406)
        })
    })

    it('Check type validation message', async () => {

        let body = {
            clientId: 1
        }
        chai.request(server).post("/v1/api/clients").send(body).end((err, res) => {
            expect(res.body[0].message).to.be.eq("should be array")

        })
    })

    it('Check item validation message', async () => {

        let body = {
            clientId: ["1"],
            costTypeId: ["1"],
            projectId: ["1"]
        }
        chai.request(server).post("/v1/api/clients").send(body).end((err, res) => {
            expect(res.body[0].message).to.be.eq("should be integer")

        })
    })
})