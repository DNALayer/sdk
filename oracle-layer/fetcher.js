const axios = require("axios");

async function fetchExternalData(url) {

    try {

        const response = await axios.get(url);

        return {
            success: true,
            data: response.data
        };

    } catch (error) {

        return {
            success: false,
            error: error.message
        };
    }
}

module.exports = fetchExternalData;
