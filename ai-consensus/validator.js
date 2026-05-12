async function validateData(data) {

    console.log("Validating data...");

    const confidence = Math.random();

    return {
        approved: confidence > 0.5,
        confidence
    };
}

module.exports = validateData;
