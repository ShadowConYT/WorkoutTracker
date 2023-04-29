import React, { Component } from "react";
import axios from "axios";
import TableScrollbar from "react-table-scrollbar";
import Navbar from "./navbar.component";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.progname}</td>
    <td>{props.exercise.exercisename}</td>
    <td>{props.exercise.type}</td>
    <td>
      <a
        href="#"
        onClick={() => {
          props.addExercise(props.exercise._id);
        }}
      >
        Add
      </a>
    </td>
  </tr>
);

export default class CreateRoutine extends Component {
  constructor(props) {
    super(props);

    this.onChangeRoutineName = this.onChangeRoutineName.bind(this);
    this.onChangeRoutineType = this.onChangeRoutineType.bind(this);
    this.addExercise = this.addExercise.bind(this);
    //this.deleteExercise = this.deleteExercise.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      routineName: "",
      routineDetail: [],
      routineType: "",
      exercises: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeRoutineName(e) {
    this.setState({
      exerciseName: e.target.value,
    });
  }

  onChangeRoutineType(e) {
    this.setState({
      type: e.target.value,
    });
  }

  addExercise(Exercise) {
    this.setState({
      routineDetail: this.state.routineDetail.concat({
        Exercise,
      }),
    });
  }

  deleteExercise(id) {
    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((currentExercise) => {
      return (
        <Exercise
          exercise={currentExercise}
          deleteExercise={this.deleteExercise}
          key={currentExercise._id}
        />
      );
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const routine = {
      routineName: this.state.routineName,
      routineDetail: this.state.routineDetail,
      routineType: this.state.routineType,
    };

    console.log(routine);

    axios
      .post("http://localhost:5000/routines/add", routine)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <Navbar />
        <h3>Create New Routine</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Routine Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.routineName}
              onChange={this.onChangeRoutineName}
            />
          </div>
          <div className="form-group">
            <label>Routine Type: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.routineType}
              onChange={this.onChangeRoutineType}
            >
              <option value="Strength">Strength</option>
              <option value="Cardio">Cardio</option>
              <option value="Mobility">Mobility</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="form-group">
            <label>Exercise: </label>
            <TableScrollbar rows={5}>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Progression Name</th>
                    <th>Exercise Name</th>
                    <th>Progression Rank</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{this.exerciseList()}</tbody>
              </table>
            </TableScrollbar>
          </div>
          <div className="form-group">
            <button>Add Exercise</button>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Routine"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
