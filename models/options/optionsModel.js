const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    body: { type: String },
    correct: { type: Boolean },
    times_chosen: { type: Number }
});

const Option = mongoose.model("Option", optionSchema);

module.exports = { optionSchema, Option };