const express = require("express");
const router = express.Router();
const makeQuery = require("./../../query-builder");

const Question = require("./../../models/questions/questionsModel");

router
    .route("/")
    .get((req, res) => {
        Question.find()
            .then((questions) => {
                console.log(questions)
                res.status(200).json({
                    status: 'success',
                    data: questions
                })
            })
            .catch((err) => console.log(err));
    })
    .post((req, res) => {
        makeQuery()
            .then(aiResponse => {
                const data = Array.isArray(aiResponse) ? aiResponse : [aiResponse];

                const normalizedResponses = data.map((el) => {
                    const normalizedData = {
                        category: { domain: el.domain, subdomain: el.subdomain, topic: el.topic },
                        question: el.question,
                        thumbnail: false,
                        thumbnail_url: "",
                        validated: false,
                        options: [],
                        summary: { text: el.summary.text, image_url: el.summary.image_url },
                        times_shown: 0
                    }

                    const optionsArray = el.options.map((option) => {
                        return { body: option.text, correct: option.is_correct, times_chosen: 0 };
                    })
                    normalizedData.options = optionsArray;

                    return normalizedData;
                })

                return Question.insertMany(normalizedResponses);
            })
            .then(() => {
                res.status(200).json({
                    status: "success",
                })
            })
            .catch((err) => console.log(err));
    })

module.exports = router;