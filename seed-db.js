// IMPORTS
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Question = require("./models/questions/questionsModel");
const { Answer } = require("./models/answers/answersModel");

// CONFIG
dotenv.config();
const DB = process.env.DATABASE_LOCAL;

// CONNECTION TO DB
mongoose.connect(DB).then((connection) => {
    console.log("Connection to DB is now established!")
})

// SAVING DOCUMENT TO DB
const answer1 = new Answer({
    body: "Yo que sé, tío",
    validated: false,
    times_chosen: 0
});

const answer2 = new Answer({
    body: "No me ralles",
    validated: false,
    times_chosen: 0
});

const answer3 = new Answer({
    body: "Pos claro",
    validated: false,
    times_chosen: 0
});

const answer4 = new Answer({
    body: "Pasapalabra",
    validated: false,
    times_chosen: 0
});

const testQuestion = new Question({
    category: {
        domain: "Nomenclatura náutica",
        subdomain: "Casco",
        topic: "Popa",
    },
    body: "¿Se puede cagar en alta mar?",
    img: false,
    image_url: null,
    validated: false,
    answers: [answer1, answer2, answer3, answer4],
    times_shown: 0,
});

testQuestion.save()
    .then((doc) => {
        console.log("Document saved in the DB!");
        console.log(doc);
    })
    .catch((err) => console.log(err));