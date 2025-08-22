// IMPORTS
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Question = require("../models/questions/questionsModel");
const { Option } = require("../models/options/optionsModel");

// CONFIG
dotenv.config();
const DB = process.env.DATABASE_LOCAL;
console.log(DB)

// CONNECTION TO DB
mongoose.connect(DB).then((connection) => {
    console.log("Connection to DB is now established!")
})

// SAVING DOCUMENT TO DB
const option1 = new Option({
    body: "La parte del casco situada por encima de la línea de flotación en todas las condiciones.",
    validated: false,
    times_chosen: 0
});

const option2 = new Option({
    body: "El conjunto de palos y jarcia fija de la embarcación.",
    validated: false,
    times_chosen: 0
});

const option3 = new Option({
    body: "La zona de popa donde se aloja el timón y el codaste.",
    validated: false,
    times_chosen: 0
});

const option4 = new Option({
    body: "La parte del casco situada por debajo de la línea de flotación en carga.",
    validated: true,
    times_chosen: 0
});

const testQuestion = new Question({
    category: {
        domain: "Nomenclatura náutica",
        subdomain: "Casco",
        topic: "Obra viva",
    },
    body: "¿Qué se denomina 'obra viva' del casco?",
    img: false,
    image_url: null,
    validated: false,
    options: [option1, option2, option3, option4],
    times_shown: 0,
});

/* testQuestion.save()
    .then((doc) => {
        console.log("Document saved in the DB!");
        console.log(doc);
    })
    .catch((err) => console.log(err)); */