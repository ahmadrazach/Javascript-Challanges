const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout");
const DB = require("../database/db.json");

const getAllWorkouts = () => {
    try {
        const allWorkouts = Workout.getAllWorkouts();
        return allWorkouts;
      } catch (error) {
        throw error;
      }
  };
  
  const getOneWorkout = () => {
    try {
        const workout = Workout.getOneWorkout(workoutId);
        return workout;
      } catch (error) {
        throw error;
      }
  };
  
  const createNewWorkout = () => {
    
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      };
    
      try {
        const createdWorkout = Workout.createNewWorkout(workoutToInsert);
        return createdWorkout;
      } catch (error) {
        throw error;
      }
    
  };
  
  const updateOneWorkout = (workoutId, changes) => {
    try {
      const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
      return updatedWorkout;
    } catch (error) {
      throw error;
    }
  };
  
  const deleteOneWorkout = (workoutId) => {
    
    try {
        Workout.deleteOneWorkout(workoutId);
      } catch (error) {
        throw error;
      }

  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };