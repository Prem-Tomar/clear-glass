const { SUCCESS, FAILURE, FAILURE_MESSAGE } = require("../constants/response.constants")

let SendSuccessResponse = async (data) => {
    let response = await data;
    return new Promise((res, rej) => {
        res({
            status: SUCCESS,
            data: response
        })
    })
}

let SendFailureResponse = async (error) => {
    return new Promise((res, rej) => {
        res({
            status: FAILURE,
            error: error.message,
            message: FAILURE_MESSAGE
        })
    })
}

module.exports = {
    SendSuccessResponse, SendFailureResponse
}