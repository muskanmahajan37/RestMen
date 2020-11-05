//server code

// env
require("dotenv").config({ path: ".env" });

//libs
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//connect to mongodb

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("Error", (error) => console.error(error));
db.on("Opened Successfully", () => console.log("Connected to database"));

app.listen(300, () => console.log("Server Running!"));
