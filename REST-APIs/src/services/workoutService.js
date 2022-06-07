const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout");
const DB = require("../database/db.json");

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
  };
  
  const getOneWorkout = () => {
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
  };
  
  const createNewWorkout = () => {
    
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      };
    
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    
    return createdWorkout;
  };
  
  const updateOneWorkout = () => {

    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
  };
  
  const deleteOneWorkout = () => {
    
    Workout.deleteOneWorkout(workoutId);
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };