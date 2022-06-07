const express=require('express');
const workoutController = require("../../controllers/workoutController");
const router=express.Router();

router.get('/', workoutController.getAllWorkouts)

router.get("/:workoutId",workoutController.getOneWorkout);

  router.post("/:workoutId", workoutController.updateOneWorkout);

  router.patch("/:workoutId", (req, res) => {
    res.send("Update an existing workout");
  });

  router.delete("/:workoutId", workoutController.deleteOneWorkout);
  
  module.exports = router;