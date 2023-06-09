const router = require("express").Router();
let Exercise = require("../models/exercise.model");

// Get All Exercises
router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Add Exercise
router.route("/add").post((req, res) => {
  const exerciseName = req.body.exerciseName;
  const type = req.body.type;
  const category = req.body.category;
  const description = req.body.discription;
  const progressionId = req.body.progressionId;
  const userId = req.body.userId;

  const newExercise = Exercise.create({
    exerciseName: exerciseName,
    type,
    category,
    description: description,
    progressionId,
    userId,
  });

  res.json({ data: "Exercise added!", id: newExercise._id });
});

// Get Exercise
router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Delete Exercise
router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update Exercise
router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.exerciseName = req.body.exerciseName;
      exercise.type = req.body.type;
      exercise.category = req.body.category;
      exercise.discription = req.body.discription;
      exercise.progressionId = req.body.progressionId;
      exercise.userId = req.body.userId;
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
