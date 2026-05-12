const express = require("express");

const router = express.Router();

router.post("/", async (_, res) => {

    res.json({
        success: true
    });
});

module.exports = router;
