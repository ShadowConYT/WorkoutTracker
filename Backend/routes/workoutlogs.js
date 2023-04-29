const router = require("express").Router();
let WorkoutLog = require("../models/workoutlog.model");

// Get All WorkoutLogs
router.route("/").get((req, res) => {
  WorkoutLog.find()
    .then((workoutLogs) => res.json(workoutLogs))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Add WorkoutLog
router.route("/add").post((req, res) => {
  const workoutDate = Date.parse(req.body.workoutDate);
  const routineName = req.body.routinename;
  const duration = Number(req.body.duration);
  const username = req.body.username;

  const newWorkoutLog = new WorkoutLog({
    workoutDate,
    routineName,
    duration,
    username,
  });

  newWorkoutLog
    .save()
    .then(() => res.json("Workout Log added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get WorkoutLog
router.route("/:id").get((req, res) => {
  WorkoutLog.findById(req.params.id)
    .then((workoutLog) => res.json(workoutLog))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Delete WorkoutLog
router.route("/:id").delete((req, res) => {
  WorkoutLog.findByIdAndDelete(req.params.id)
    .then(() => res.json("Workout Log deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update WorkoutLog
router.route("/update/:id").post((req, res) => {
  WorkoutLog.findById(req.params.id)
    .then((workoutLog) => {
      workoutLog.workoutdate = Date.parse(req.body.workoutdate);
      workoutLog.routinename = req.body.routinename;
      workoutLog.duration = Number(req.body.duration);
      workoutLog.username = req.body.username;

      workoutLog
        .save()
        .then(() => res.json("Workout Log updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
