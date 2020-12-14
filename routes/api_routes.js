require('../db/mongoose');
const Workout = require('../modules/workoutSchema');

module.exports = function(app) {
  //get last workout
  app.get('/api/workouts', async (req, res) => {
    const workout = await Workout.find({});
    res.json(workout);
  });

  //Create a new Workout
  app.post('/api/workouts', (req, res) => {
    const data = req.body;
    data.date = new Date().setDate(new Date().getDate());
    const workout = new Workout(data);
    workout
      .save()
      .then(() => {
        res.json(workout);
      })
      .catch(error => {
        console.log(error);
      });
  });

  //Add an exercise to a workout
  app.put('/api/workouts/:id', async (req, res) => {
    try {
      const newWorkout = await Workout.findById(req.params.id);
      newWorkout.exercises.push(req.body);
      newWorkout
        .save()
        .then(() => {
          res.json(newWorkout);
        })
        .catch(error => {
          console.log(error);
          res.status(500).send(error);
        });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

  //Get all workouts in database
  app.get(`/api/workouts/range`, async (req, res) => {
    try {
      const data = await Workout.find({});
      console.log(data);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
};