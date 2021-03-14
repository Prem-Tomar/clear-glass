const CostTypes = require("./models/cost-types");

let getChildCostTypes = async (rootCost, costs) => {
    let expendPromise = [];
    rootCost = rootCost.map(item => {
        expendPromise.push(CostTypes.findAll({
            where: {
                parent_id: item.id
            },
            attributes: ['id', 'type', 'name', 'amount']
        }))
        return item
    })
    let child = await Promise.all(expendPromise);
    for (let [idx, item] of child.entries()) {
        if (item.length > 0) {
            item = await getChildCostTypes(item, costs);
        }

        item = item.map(ct => {
            let cost = costs.find(cost => cost.cost_type_id === ct.id)
            if (cost)
                ct.amount = parseFloat(cost.amount)
            if (!ct.amount)
                ct.amount = 0
            rootCost[idx].amount = (rootCost[idx].amount ? rootCost[idx].amount : 0) + (ct.amount ? parseFloat(ct.amount) : 0)
            return ct.toJSON()
        })
        rootCost[idx].children = item;

    }

    return rootCost;
}


let getAllCostTypes = async (costs) => {

    let rootCost = await CostTypes.findAll({
        where: {
            parent_id: null
        },
        attributes: ['id', 'type', 'name', 'amount']
    })
    rootCost = await getChildCostTypes(rootCost, costs);
    return rootCost;
}


module.exports = {
    getAllCostTypes
}

