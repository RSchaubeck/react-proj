const mongoose = require('mongoose');
const express = require("express");
const users = require('./routes/api/users');
const tournaments = require('./routes/api/tournaments');
const bodyParser = require('body-parser');

const app = express();
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));