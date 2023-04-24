import React from 'react'

const Workout = (props) => {
  return (
    <div
      className="workout"
      style={{backgroundColor: props.completed ? "green" : "white"}}
    >
      <h1>{props.exerciseName}</h1>
      <button onClick={() => props.deleteWorkout(props.id)}> X </button>




    </div>
  )
}

export default Workout