const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    option_1: {
        body: { type: String },
        correct: { type: Boolean },
        summary: { type: String }
    },
    option_2: {
        body: { type: String },
        correct: { type: Boolean },
        summary: { type: String }
    },
    option_3: {
        body: { type: String },
        correct: { type: Boolean },
        summary: { type: String }
    },
    option_4: {
        body: { type: String },
        correct: { type: Boolean },
        summary: { type: String }
    }
});

const Option = mongoose.model("Option", optionSchema);

module.exports = { optionSchema, Option };