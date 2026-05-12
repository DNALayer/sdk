const fetchExternalData = require("../oracle-layer/fetcher");
const runConsensus = require("../ai-consensus/consensus");

async function executeTask(url) {

    const external = await fetchExternalData(url);

    if (!external.success) {
        throw new Error("Failed to fetch external data");
    }

    const consensus = await runConsensus(external.data);

    if (!consensus.approved) {
        throw new Error("Consensus rejected execution");
    }

    return {
        success: true,
        execution: "Smart contract executed",
        consensus
    };
}

module.exports = executeTask;
