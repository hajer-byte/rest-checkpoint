const express = require("express");
var mongoose = require("mongoose");
const User = require("./models/User");
const router = express.Router();
const app = express();

//environment variables
require("dotenv").config();
//database connection
const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.error("Mongoose not connected"));

//parse data
app.use(express.json());

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch((err) => console.log(err));
});

router.post("/addUser", (req, res) => {
  const newPerson = new User(req.body);
  newPerson.save((err, data) => {
    err ? console.error(err) : res.send("user was added");
  });
});

router.put("/updatePerson/:_id", (req, res) => {
  const { _id } = req.params;
  Person.findOneAndUpdate(
    { _id },
    { addToSet: { name: "Hajer" } },
    {
      new: true,
      upsert: true,
    }
  )
    .then((users) => res.send(users))
    .catch((err) => console.log(err));
});

router.delete("/deletePerson/:_id", (req, res) => {
  const { _id } = req.params;
  User.findOneAndDelete({ _id })
    .then((Users) => res.send(Users))
    .catch((err) => console.log(err));
});

var port = process.env.PORT || 5000;
app.listen(port, (err) => {
  err ? console.error(err) : console.log("this app is listening on port", port);
});
