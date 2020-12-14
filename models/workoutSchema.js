const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercises: [],
  day: Number
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;