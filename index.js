class DNALayerSDK {

    async execute(url) {

        const response = await fetch(
            "http://localhost:3000/execute",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ url })
            }
        );

        return response.json();
    }
}

module.exports = DNALayerSDK;
