const express = require("express"); 

// *** ADD Router ***
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

// *** ADD ***
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT,()=>{
    console.log(`API is listening on PORT ${PORT}`)
})