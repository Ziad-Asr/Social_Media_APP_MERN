const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config(); // Now dotenv is ready to use.
mongoose.connect(process.env.MONGO_URL); // Connecting to our database on Mongo Atlas.

// Middleware
app.use(express.json()); // In (post) requests, parses the posted data and make it available in (req.body).
app.use(helmet()); // Helmet is a collection of middleware functions to help secure Express applications by setting various HTTP headers.
app.use(morgan("common")); //  Morgan is a logging middleware for Express. It provides information about incoming requests,
//  such as the HTTP method, URL, response status, and execution time,
//  which can be useful for debugging and monitoring

app.use("/users", (req, res) => {
  res.send("Welcome to user page!");
});

app.use("/", (req, res) => {
  res.send("Welcome to home page!");
});

app.listen(8000, () => {
  console.log("Backend server is running!");
});
