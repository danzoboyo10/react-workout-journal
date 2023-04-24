import './App.css';
import { useState } from "react";
import Workout from './Workout';

function App() {
  const [workoutList, setWorkoutList] = useState([]);
  const [newWorkout, setNewWorkout] = useState("");

  const handleChange = (event) => {
    setNewWorkout(event.target.value);
  }

  const addWorkout = () => {
    const workout = {
      id: workoutList.length === 0 ? 1 : workoutList[workoutList.length - 1].id + 1,
      exerciseName: newWorkout,
      completed: false
    };
    setWorkoutList([...workoutList, workout])
  }

  const deleteWorkout = (id) => {
    setWorkoutList(workoutList.filter((workout)=> workout.id !== id))
  }

  const completeWorkout = (id) => {
    setWorkoutList(
      workoutList.map((workout) => {
        if(workout.id === id) {
          return { ...workout, completed: true};
        } else {
          return workout
        }
      })
    )
  }


  return (
    <div className="App"> 
      <div>
      <input onChange={handleChange} />
      <button onClick={addWorkout}> Add Workout </button>
    </div>
    <div>
      {workoutList.map((workout) => {
        return (
          <Workout
            exerciseName={workout.exerciseName}
            id={workout.id}
            completed={workout.completed}
            deleteWorkout={deleteWorkout}
            completeWorkout={completeWorkout}
          />
        )
      })}
    </div>
    </div>
    
    
    
  );
}

export default App;
