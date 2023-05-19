import React from "react";
import { useState } from "react";
import Modal from 'react-modal';


const Workout = (props) => {

  const [showModal, setShowModal] = useState(false)

  const handleDelete = () => {
    setShowModal(true)
  }

  const handleConfirmDelete = () => {
    setShowModal(false)
  }

  const handleCancelDelete = () => {
    setShowModal(false)
  
  }
  const modalStyles = {
    content: {
      backgroundColor: "black",
      color: "white",
      width: '410px',
      height: '200px',
      margin: 'auto',
      border: 'solid',
      borderColor: 'white-smoke',
      fontFamily: 'Poppins', 
      textAlign: 'center'
    }
  }

  return (
    <div className="workoutContainer">
      <div className="listBtnContainer">
        <button onClick={() => props.completeWorkout(props.id)}>
          COMPLETE
        </button>
        <button onClick={() => props.nonCompleteWorkout(props.id)}>
          UNCOMPLETE
        </button>
        <button onClick={handleDelete}> Delete Workout</button>
        <Modal isOpen ={showModal} onRequestClose={handleCancelDelete} style={modalStyles} >
        <h2 className="areYouSure"> Are you sure you want to delete this workout? </h2>
        <button className = "modalYesBtn" onClick={() => { handleConfirmDelete(); props.deleteWorkout(props.id) }}> Yes </button>
        <button className="modalNoBtn" onClick={handleCancelDelete}> No </button>
        </Modal>

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
