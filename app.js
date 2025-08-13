// IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// SERVER CONFIG
const app = express();
dotenv.config();

const PORT = process.env.PORT;
const DB = process.env.DATABASE_LOCAL;

// CONNECTION TO DB
mongoose.connect(DB).then((connection) => {
    console.log("Connection to DB is now established!")
})

app.use(cors());

// ROUTING
const questionsRouter = require("./routes/questions/questionsRoutes.js");

app.use("/api/v1/questions", questionsRouter);

// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});

module.exports = app;