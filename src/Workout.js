import React from "react";

const Workout = (props) => {
  return (
    <div className="workoutContainer">
      <div className="listBtnContainer">
        <button onClick={() => props.completeWorkout(props.id)}> 
          COMPLETE
        </button>
        <button onClick={() => props.nonCompleteWorkout(props.id)}>
          UNCOMPLETE
        </button>
        <button onClick={() => props.deleteWorkout(props.id)}> DELETE </button>
      </div>
      <div
        className="workoutRowLeft"
        style={{ backgroundColor: props.completed ? "green" : "red" }}
      >
        <div
          className="workout"
          style={{
            backgroundColor: props.nonCompleteWorkout ? "black" : "white",
          }}
        >
          <div className="exerciseDetailsContainer">
            <h1 className="exerciseName">
              <i> Exercise Name: </i>
              {props.exerciseName}
            </h1>
            <h2 className="dayOfWeek">
              <i> Day of Week: </i>
              {props.dayOfWeek}
            </h2>
            <h2 className="timeOfWorkout">
              <i> Time of Workout: </i>
              {props.timeOfWorkout}
            </h2>
            <h2 className="repsNSets">
              <i> # of Repetitions and # of Sets: </i>
              {props.numberOfSetsReps}
            </h2>
            <h2 className="rpe">
              <i> Rated Perceived Exertion (RPE) (0-10): </i>
              {props.rpe}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workout;
