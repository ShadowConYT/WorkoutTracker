const router = require("express").Router();
let Progression = require("../models/progression.model");

// Get All Progressions
router.route("/").get((req, res) => {
  Progression.find()
    .then((progressions) => res.json(progressions))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Add Progression
router.route("/add").post((req, res) => {
  const programName = req.body.programName;
  const category = req.body.category;
  const description = req.body.description;
  const exercises = req.body.exercises;

  const newProgression = new Progression({
    programName,
    category,
    description,
    exercises,
  });

});

// Get Progression
router.route("/:id").get((req, res) => {
  Progression.findById(req.params.id)
    .then((progression) => res.json(progression))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Delete Progression
router.route("/:id").delete((req, res) => {
  Progression.findByIdAndDelete(req.params.id)
    .then(() => res.json("Progression deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update Progression
router.route("/update/:id").post((req, res) => {
  Progression.findById(req.params.id)
    .then((progression) => {
      progression.programName = req.body.programName;
      progression.category = req.body.category;
      progression.description = req.body.description;
      progression.exercises = req.body.exercises;
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
