const router = require("express").Router();
const Workout = require("../models/workout.js"); //uppercase for models
//api.js
//match fetch request, handshake to api.js

module.exports = (app) => {
  //GET LAST WORKOUT
  app.get("/api/workouts", (req, res) => res.json(data));

  //ADD EXERCISE
  app.put("/api/workouts", (req, res) => res.json(data));

  // CREATE WORKOUT
  app.post("/api/workouts", (req, res) => res.json(data));

  //GET WORKOUTS IN RANGE
  app.post("/api/workouts/range", (req, res) => res.json(data));
};
module.exports = router;
