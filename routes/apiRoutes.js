const router = require("express").Router();
const Workout = require("../models/workout.js"); //uppercase for models
//api.js
//match fetch request, handshake to api.js

//module.exports = (app) => {
// GET ALL
//   app.get("/api/workouts", (req, res) =>

//   res.json(data));

router.get("/workouts", (req, res) => {
  Workout.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((findWorkouts) => {
      res.json(findWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

//ADD EXERCISE
router.put("/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    { _id: req.params.id },

    { $push: { exercises: req.body } },
    { new: true },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );

  //   Workout.insert(req.body, (error, data) => {
  //     if (error) {
  //       res.send(error);
  //     } else {
  //       res.send(data);
  //     }
  //   });
});
// router.route("/update").post(function(req, res) {
//     kennels.findByIdAndUpdate(
//       { _id: "5db6b26730f133b65dbbe459" },
//       { breed: "Great Dane" },
//DEFAULTS TO $SET { $set: { breed: "Great Dane" } }

//       function(err, result) {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send(result);
//         }
//       }
//     );
//   });
// CREATE WORKOUT
//router.post("/workouts", (req, res) => res.json(data));

router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//GET WORKOUTS IN RANGE
router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])

    .then((getWorkoutsInRange) => {
      res.json(getWorkoutsInRange);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
// router.get("/workouts/range", (data, res) => {
//   Workout.aggregate([
//     {
//       $addFields: {
//         totalDuration: { $sum: "$exercises.duration" },
//       },
//     },
//   ])
//     .then(getWorkoutsInRange) => {
//
//       res.json(getWorkoutsInRange);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// router.post("/workouts/range", (req, res) => {
//   Workout.update(
//     {
//       _id: mongojs.ObjectId(req.params.id),
//     },
//     {
//       $set: {
//         title: req.body.title,
//         workout: req.body.workout,
//         modified: Date.now(),
//       },
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });
//};
