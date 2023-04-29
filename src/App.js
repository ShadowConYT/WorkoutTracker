import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import components
import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import WorkoutLogList from "./components/workoutlogs-list.component";
import CreateWorkoutLog from "./components/create-workoutlog.component";
import EditWorkoutLog from "./components/edit-workoutlog.component";
// import ProgressionList from "./components/progression-list.component";
import CreateProgression from "./components/create-progression.component";
import ExercisesList from "./components/exercises-list.component";
import CreateExercise from "./components/create-exercise.component";
import EditExercise from "./components/edit-exercise.component";
import CreateUser from "./components/create-user.component";
import ViewUser from "./components/view-user.component";
import EditUser from "./components/edit-user.component";
// import RoutinesList from "./components/routines-list.component";
import CreateRoutine from "./components/create-routine.component";
// import EditRoutine from "./components/edit-routine.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/workout" exact element={<WorkoutLogList />} />
        <Route path="/workout/add" exact element={<CreateWorkoutLog />} />
        <Route path="/workout/edit/:id" element={<EditWorkoutLog />} />
        <Route path="/exercise" exact element={<ExercisesList />} />
        {/* <Route path="/routine/" component={RoutinesList} /> */}
        <Route path="/routine/add" element={<CreateRoutine />} />
        {/* <Route path="/routine/edit/:id" component={EditRoutine} /> */}
        {/* <Route path="/progression/" component={ProgressionList} /> */}
        <Route path="/progression/add" element={<CreateProgression />} />
        <Route path="/exercise/add" element={<CreateExercise />} />
        <Route path="/exercise/edit/:id" element={<EditExercise />} />
        <Route path="/user/add" element={<CreateUser />} />
        <Route path="/user/profile/:id" element={<ViewUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
