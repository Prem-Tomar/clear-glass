const express = require('express');
const Ajv = require('ajv').default;
const q = require('q');

let ResponseHandler = res => data => res.json(data)
let ErrorHandler = next => err => {
    let error = new Error(err)
    error.status = 505
    error.trace = err;
    next(error)
}

function Controller(actions, options) {
    if (typeof options === "undefined")
        options = {};

    let validate = (body, options) => {

        let deferred = q.defer()

        let ajv = new Ajv()


        if (typeof options.schema !== "undefined") {

            let schema = require('../../' + options.schema)
            const validateSchema = ajv.compile(schema)

            let valid = validateSchema(body)
            if (valid)
                deferred.resolve(body)
            else {
                deferred.reject(validateSchema.errors)
            }

        }

        return deferred.promise;
    }

    let Action = (action, options) => {
        if (typeof options === "undefined")
            options = {};

        if (typeof action !== "function")
            throw "Invalid action: " + action;
        let stack = [];

        let apiAction = (req, res, next) => {
            q(validate(req.body, options))
                .then(data => action(data))
                .then(ResponseHandler(res))
                .catch(ErrorHandler(next))
        }

        stack.push(apiAction);

        return stack;

    }

    let ControllerActions = {};

    for (let i in actions) {
        ControllerActions[i] = Action(actions[i], options[i])
    }

    return ControllerActions
}

module.exports = Controller;