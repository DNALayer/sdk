require("dotenv").config();

const express = require("express");
const cors = require("cors");

const executeTask = require("../execution-engine/engine");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {

    res.json({
        name: "DNALayer",
        status: "active"
    });
});

app.post("/execute", async (req, res) => {

    try {

        const { url } = req.body;

        const result = await executeTask(url);

        res.json(result);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
});

app.listen(process.env.PORT, () => {

    console.log(
        `DNALayer API running on port ${process.env.PORT}`
    );
});
