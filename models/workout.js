const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//look at seed.js eg date/exercises(array.)
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter exercise name",
      },
      duration: {
        type: Number,
        required: "Enter Exercise Duration",
        min: [0, "Cannot be negative or zero"],
      },
      weight: {
        type: Number,
        min: [0, "Cannot be negative or zero"],
      },
      reps: {
        type: Number,
        min: [0, "Cannot be negative or zero"],
      },
      sets: {
        type: Number,
        min: [0, "Cannot be negative or zero"],
      },
      distance: {
        type: Number,
        min: [0, "Cannot be negative or zero"],
      },
      //second validation ,do no accept negative numbers
    },
  ],
  //weight , reps, sets, duration
  //distance not required
});

//   password: {
//     type: String,
//     trim: true,
//     required: "Password is Required",
//     validate: [({ length }) => length >= 6, "Password should be longer."]
//   },

//   email: {
//     type: String,
//     unique: true,
//     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
//   },

//   userCreated: {
//     type: Date,
//     default: Date.now
//   }
// });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
//const workoutSchema = new Schema({