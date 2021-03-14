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

    it('Check API integer validation errors', async () => {
        let body = {
            clientId: "1",
            costTypeId: "1",
            projectId: "1"
        }
        chai.request(server).post("/v1/api/clients").send(body).end((err, res) => {
            expect(res).to.have.status(406)
        })
    })

    it('Check validation message', async () => {

        let body = {
            clientId: "1",
            costTypeId: "1",
            projectId: "1"
        }
        chai.request(server).post("/v1/api/clients").send(body).end((err, res) => {
            expect(res.body[0].message).to.be.eq("should be integer")

        })
    })
})