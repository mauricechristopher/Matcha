const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

// middleware

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// configure ze databasin

const db = require("../../config/keys").mongoURI;

// connect to ze databasin

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// passport middleware
app.use(passport.initialize());
// passport config
require("../../config/passport")(passport);

// routes
app.use("/api/users", users);

const port = process.env.PORT || 5000; // process.env.port is for future hosting on Heroku

app.listen(port, () => console.log(`Server is a go on port ${port} !`));
