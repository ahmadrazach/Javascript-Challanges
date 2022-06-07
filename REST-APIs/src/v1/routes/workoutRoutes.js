const express=require('express');
const workoutController = require("../../controllers/workoutController");
const router=express.Router();

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.get('/', workoutController.getAllWorkouts)

router.get("/:workoutId",workoutController.getOneWorkout);

router.post("/", workoutController.createNewWorkout);

  router.post("/:workoutId", workoutController.updateOneWorkout);

  router.delete("/:workoutId", workoutController.deleteOneWorkout);



  module.exports = router;