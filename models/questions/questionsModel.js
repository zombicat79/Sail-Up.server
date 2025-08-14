const mongoose = require("mongoose");
const { optionSchema } = require("./../options/optionsModel");

const questionSchema = new mongoose.Schema({
    category: {
        domain: { type: String },
        subdomain: { type: String },
        topic: { type: String },
    },
    question: { type: String },
    thumbnail: { type: Boolean },
    thumbnail_url: { type: String },
    validated: { type: Boolean },
    options: [optionSchema],
    summary: {
        text: { type: String },
        image_url: { type: String }
    },
    times_shown: { type: Number },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;