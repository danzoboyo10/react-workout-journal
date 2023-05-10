import "./App.css";
import { useState } from "react";
import Workout from "./Workout";
import Footer from "./Footer";
import Header from "./Header";
import Form from "./Form";

const DUMMY_WORKOUTS = [
  {
    id: "e1",
    exerciseName: "Dumbell Row",
    dayOfWeek: "Monday",
    timeOfWorkout: "10:00am",
    numberOfSetsReps: "3 sets of 10",
    rpe: 7,
    completed: false,
  },
  {
    id: "e2",
    exerciseName: "Lat Pull Down",
    dayOfWeek: "Tuesday",
    timeOfWorkout: "10:15am",
    numberOfSetsReps: "4 sets of 8",
    rpe: 5,
    completed: false,
  },
  {
    id: "e3",
    exerciseName: "Incline Bench Press",
    dayOfWeek: "Wednesday",
    timeOfWorkout: "10:40am",
    numberOfSetsReps: "4 sets of 12",
    rpe: 6,
    completed: false,
  },
  {
    id: "e4",
    exerciseName: "Reverse Lunges",
    dayOfWeek: "Thursday",
    timeOfWorkout: "11:00am",
    numberOfSetsReps: "2 sets of 15",
    rpe: 4,
    completed: false,
  },
];

function App() {
  const [workoutList, setWorkoutList] = useState(DUMMY_WORKOUTS);
  const [workoutName, setworkoutName] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [timeOfWorkout, settimeOfWorkout] = useState("");
  const [numberOfSetsReps, setnumberOfSetsReps] = useState("");
  const [rpeVal, setrpeVal] = useState("");

  const handleNameChange = (event) => {
    setworkoutName(event.target.value);
  };
  const handleDayChange = (event) => {
    setDayOfWeek(event.target.value);
  };
  const handleTimeChange = (event) => {
    settimeOfWorkout(event.target.value);
  };
  const handleRepsSetsChange = (event) => {
    setnumberOfSetsReps(event.target.value);
  };
  const handleRpeChange = (event) => {
    setrpeVal(event.target.value);
  };

  const addWorkout = () => {
    const newWorkoutList = {
      id:
        workoutList.length === 0
          ? 1
          : workoutList[workoutList.length - 1].id + 1,
      exerciseName: workoutName,
      dayOfWeek: dayOfWeek,
      timeOfWorkout: timeOfWorkout,
      numberOfSetsReps: numberOfSetsReps,
      rpe: rpeVal,
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
      <Form
        handleNameChange={handleNameChange}
        handleDayChange={handleDayChange}
        handleTimeChange={handleTimeChange}
        handleRepsSetsChange={handleRepsSetsChange}
        handleRpeChange={handleRpeChange}
        addWorkout={addWorkout}
      />
      <div className="workoutList">
        {workoutList.map((workout) => {
          return (
            <div>
              <Workout
                id={workout.id}
                exerciseName={workout.exerciseName}
                timeOfWorkout={workout.timeOfWorkout}
                dayOfWeek={workout.dayOfWeek}
                numberOfSetsReps={workout.numberOfSetsReps}
                rpe={workout.rpe}
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
