const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    body: { type: String },
    validated: { type: Boolean },
    times_chosen: { type: Number }
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = { answerSchema, Answer };