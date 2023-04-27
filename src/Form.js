import React from "react";
import AddWorkoutBtn from "./AddWorkoutBtn";

const Form = (props) => {
  return (
    <div className="addWorkout">
      <div className="formDirections">
        * DIRECTIONS: FILL OUT THE FORM BELOW TO MAKE GAINS *
      </div>
      <input
        type="text"
        name="exercise"
        placeholder="Enter an Exercise Name"
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="Day of Week"
        placeholder="Enter Day of Week"
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="Time of Workout"
        placeholder="Enter Time of Workout"
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="Sets and Repetitions"
        placeholder="Enter # of Sets and # of repetitions of Workout"
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="Rated Perceived Exertion"
        placeholder="Enter Rated Perceived Exertion (RPE) (0-10)"
        onChange={props.handleChange}
      />

      <AddWorkoutBtn />
    </div>
  );
};

export default Form;
