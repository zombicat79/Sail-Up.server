const express = require("express");
const router = express.Router();

const Question = require("./../../models/questions/questionsModel");

router
    .route("/")
    .get((req, res, next) => {
        Question.find()
            .then((questions) => {
                console.log(questions)
                res.status(200).json({
                    status: 'success',
                    data: questions
                })
            })
            .catch((err) => console.log(err));
    });

module.exports = router;