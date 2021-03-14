require('dotenv').config()
const { getClientAndCosts } = require("../lib/clients")
const chai = require("chai")
const { expect } = chai
describe('Client service', () => {
    it("Fetches clients", async () => {
        let body = {}
        let response = await getClientAndCosts(body)
        expect(response).that.includes.any.keys(['data'])
    })

    it("Fetches client with filter", async () => {
        let body = {
            clientId: 1
        }
        let response = await getClientAndCosts(body)
        expect(response.data).to.have.length(1)
    })

    it("Verify filtered client to have same id as given in body", async () => {
        let body = {
            clientId: 1
        }
        let response = await getClientAndCosts(body)
        expect(response.data[0].id).to.be.eq(1)
    })

    it("Fetches client with project filter", async () => {
        let body = {
            clientId: 1,
            projectId: 10
        }
        let response = await getClientAndCosts(body)
        expect(response.data[0].children).to.have.length(1)
    })

    it("Verify filtered project", async () => {
        let body = {
            clientId: 1,
            projectId: 10
        }
        let response = await getClientAndCosts(body)
        expect(response.data[0].children[0].id).to.be.eq(10)
    })

})