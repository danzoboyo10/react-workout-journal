import React from 'react'

const Workout = (props) => {
  return (
    <div
      className="workoutRowLeft"
      style={{backgroundColor: props.completed ? "green" : "white"}}
    >
    <div
      className="workout"
      style={{backgroundColor: props.nonCompleteWorkout ? "grey" : "white"}}
    >
      <h1>{props.exerciseName}</h1>
      <button onClick={() => props.deleteWorkout(props.id)}> X </button>
      <button onClick={() => props.completeWorkout(props.id)}> COMPLETE </button>
      <button onClick={() => props.nonCompleteWorkout(props.id)}> UNCOMPLETED</button>

    </div>


    </div>
  )
}

export default Workout