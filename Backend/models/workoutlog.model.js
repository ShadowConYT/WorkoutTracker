const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutLogSchema = new Schema(
  {
    workoutDate: { type: Date, required: true },
    routineName: { type: String, required: true, trim: true },
    duration: { type: Number, required: true },
    username: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const WorkoutLog = mongoose.model("WorkoutLog", workoutLogSchema);

module.exports = WorkoutLog;
