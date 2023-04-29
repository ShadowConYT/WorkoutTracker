const router = require('express').Router();
let Routine = require('../models/routine.model');

// Get All Routines
router.route('/').get((req, res) => {
    Routine.find()
    .then(routines => res.json(routines))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add Routine
router.route('/add').post((req, res) => {
  const routineName = req.body.routineName;
  const routineDetail = req.body.routineDetail;
  const routineType = req.body.routineType;

  const newRoutine = new Routine({
    routineName,
    routineDetail,
    routineType
  });

  newRoutine.save()
  .then(() => res.json('Routine added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// Get Routine
router.route('/:id').get((req, res) => {
  Routine.findById(req.params.id)
    .then(routine => res.json(routine))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete Routine
router.route('/:id').delete((req, res) => {
  Routine.findByIdAndDelete(req.params.id)
    .then(() => res.json('Routine deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update Routine
router.route('/update/:id').post((req, res) => {
  Routine.findById(req.params.id)
    .then(routine => {
      routine.routineName = req.body.routineName;
      routine.routineDetail = req.body.routineDetail;
      routine.routineType = req.body.routineType;

      routine.save()
        .then(() => res.json('Routine updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;