const validateData = require("./validator");

async function runConsensus(payload) {

    const validators = [];

    for (let i = 0; i < 5; i++) {
        validators.push(validateData(payload));
    }

    const results = await Promise.all(validators);

    const approvals = results.filter(v => v.approved).length;

    return {
        approved: approvals >= 3,
        approvals,
        results
    };
}

module.exports = runConsensus;
