import { useState } from "react";

const Form = (props) => {
  const [formIsOpen, setFormIsOpen] = useState(true);

  function handleOpenCloseClick() {
    setFormIsOpen(!formIsOpen);
  }
  return (
    <>
      <button className = "openCloseBtn" onClick={handleOpenCloseClick}> 
      {formIsOpen ? "Close Workout Form" : "Open Workout Form"}
      </button>
      {formIsOpen && (
        <div className="addWorkout">
          <div className="formDirections">
            * DIRECTIONS: FILL OUT THE FORM BELOW TO MAKE GAINS *
            <input
              type="text"
              name="exercise"
              placeholder="Enter an Exercise Name"
              onChange={props.handleNameChange}
            />
            <input
              type="text"
              name="Day of Week"
              placeholder="Enter Day of Week"
              onChange={props.handleDayChange}
            />
            <input
              type="text"
              name="Time of Workout"
              placeholder="Enter Time of Workout"
              onChange={props.handleTimeChange}
            />
            <input
              type="text"
              name="Sets and Repetitions"
              placeholder="Enter # of Sets and # of repetitions of Workout"
              onChange={props.handleRepsSetsChange}
            />
            <input
              type="text"
              name="Rated Perceived Exertion"
              placeholder="Enter Rated Perceived Exertion (RPE) (0-10)"
              onChange={props.handleRpeChange}
            />
            <button className="addWorkoutBtn" onClick={props.addWorkout}>
              Add Workout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
