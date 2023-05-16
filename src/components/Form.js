const Form = (props) => {
  return (
    <div className="addWorkout">
      // Exercise Name x // Day of week x // Time of Workout //Sets and
      Repetions // RPE (Rate of Perceived Exertion)
      <div className="formDirections">
        * DIRECTIONS: FILL OUT THE FORM BELOW TO MAKE GAINS *
      </div>
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
  );
};
export default Form;