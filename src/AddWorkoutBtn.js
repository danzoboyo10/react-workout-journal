import React from 'react'

const AddWorkoutBtn = (props) => {
  return (
    <div className="addWorkoutbtnContainer">
       <button className="addWorkoutBtn" onClick={props.addWorkout}>
          {" "}
          ADD WORKOUT{" "}
        </button> 
    </div>
  )
}

export default AddWorkoutBtn