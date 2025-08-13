const mongoose = require("mongoose");
const { answerSchema } = require("./../answers/answersModel");

const questionSchema = new mongoose.Schema({
    category: {
        domain: { type: String },
        subdomain: { type: String },
        topic: { type: String },
    },
    body: { type: String },
    img: { type: Boolean },
    image_url: { type: String },
    validated: { type: Boolean },
    answers: [answerSchema],
    times_shown: { type: Number },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;