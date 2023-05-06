const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const routineSchema = new Schema(
  {
    routineName: { type: String, required: true },
    routineDetail: { type: Array, required: true },
    routineType: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Routine = mongoose.model("Routine", routineSchema);

module.exports = Routine;
