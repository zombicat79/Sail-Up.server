const express = require("express");
const router = express.Router();

const Topic = require('../../models/topics/topicsModel');

router.
    route("/")
    .get((req, res) => {
        Topic.find()
            .then((topics) => {
                console.log(topics)
                res.status(200).json({
                    status: 'success',
                    data: topics
                })
            })
            .catch((err) => console.log(err));
    })

module.exports = router;