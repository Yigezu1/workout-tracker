const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercises: [],
  date: Date,
  completed: {
    type: Boolean,
    default: false,
  },
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;