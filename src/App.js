import "./App.css";
import { useState } from "react";
import Workout from "./Workout";
import Footer from "./Footer";
import Header from "./Header";
import AddWorkoutBtn from "./AddWorkoutBtn";
import Form from "./Form";

function App() {
  const [workoutList, setWorkoutList] = useState([]);
  const [newWorkout, setNewWorkout] = useState("");

  const handleChange = (event) => {
    setNewWorkout(event.target.value);
  };

  const addWorkout = () => {
    const newWorkoutList = {
      id:
        workoutList.length === 0
          ? 1
          : workoutList[workoutList.length - 1].id + 1,
      exerciseName: newWorkout,
      dayOfWeek: newWorkout,
      timeOfWorkout: newWorkout,
      numberOfSetsReps: newWorkout,
      rpe: newWorkout,
      completed: false,
    };
    setWorkoutList([...workoutList, newWorkoutList]);
  };

  const deleteWorkout = (id) => {
    setWorkoutList(workoutList.filter((workout) => workout.id !== id));
  };

  const completeWorkout = (id) => {
    setWorkoutList(
      workoutList.map((workout) => {
        if (workout.id === id) {
          return { ...workout, completed: true };
        } else {
          return workout;
        }
      })
    );
  };
  const nonCompleteWorkout = (id) => {
    setWorkoutList(
      workoutList.map((workout) => {
        if (workout.id === id) {
          return { ...workout, completed: false };
        } else {
          return workout;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
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
          onChange={handleChange}
        />
        <input
          type="text"
          name="Day of Week"
          placeholder="Enter Day of Week"
          onChange={handleChange}
        />
        <input
          type="text"
          name="Time of Workout"
          placeholder="Enter Time of Workout"
          onChange={handleChange}
        />
        <input
          type="text"
          name="Sets and Repetitions"
          placeholder="Enter # of Sets and # of repetitions of Workout"
          onChange={handleChange}
        />
        <input
          type="text"
          name="Rated Perceived Exertion"
          placeholder="Enter Rated Perceived Exertion (RPE) (0-10)"
          onChange={handleChange}
        />
        <button className="addWorkoutBtn" onClick={addWorkout}>
          Add Workout
        </button>
      </div>
      <div className="workoutList">
        {workoutList.map((workout) => {
          return (
            <div>
              <Workout
                dayOfWeek={workout.dayOfWeek}
                timeOfWorkout={workout.timeOfWorkout}
                numberOfSetsReps={workout.numberOfSetsReps}
                rpe={workout.rpe}
                exerciseName={workout.exerciseName}
                id={workout.id}
                completed={workout.completed}
                completeWorkout={completeWorkout}
                nonCompleteWorkout={nonCompleteWorkout}
                notCompleted={workout.notCompleted}
                deleteWorkout={deleteWorkout}
              />
            </div>
          );
        })}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
