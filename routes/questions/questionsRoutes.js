const express = require("express");
const router = express.Router();

const data = require("./../../data-models/questions.json");

router
    .route("/")
    .get((req, res, next) => {
        res.json(data);
    });

module.exports = router;