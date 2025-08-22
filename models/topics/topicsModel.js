// models/Topic.js
const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },     // texto de la opción
    correct: { type: Boolean, default: false }, // si es la correcta
  },
  { _id: false }
);

const ItemSchema = new mongoose.Schema(
  {
    Domain: { type: String, required: true },
    Subdomain: { type: String },
    Topic: { type: String, required: true },
    Question: { type: String, required: true },
    Options: { type: [OptionSchema], required: true },
    Summary: {
      type: Map,
      of: String, // permite Summary 1, Summary 2, etc.
    },
  },
  { _id: false }
);

const TopicSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // ej. "nomenclatura"
  title: { type: String, required: true },            // ej. "Nomenclatura náutica"
  description: { type: String },
  image: { type: String },
  items: { type: [ItemSchema], required: true },
});

const Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;
