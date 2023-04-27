import React from 'react'

const Workout = (props) => {
  return (
    <div className='workoutContainer'>
       <div className= "listBtnContainer">
      <button className = "deleteBtn" onClick={() => props.deleteWorkout(props.id)}> DELETE </button>
      <button className = "completeBtn" onClick={() => props.completeWorkout(props.id)}> COMPLETE </button>
      <button className = "uncompleteBtn" onClick={() => props.nonCompleteWorkout(props.id)}> UNCOMPLETED</button>
      </div>
    <div
      className="workoutRowLeft"
      style={{backgroundColor: props.completed ? "green" : "red"}}
    >
    <div
      className="workout"
      style={{backgroundColor: props.nonCompleteWorkout ? "black" : "white"}}
    >
      <h1>{props.exerciseName}</h1>
     
    </div>

    </div>
    </div>
  )
}

export default Workout