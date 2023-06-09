import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar.component";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.exerciseName}</td>
    <td>{props.exercise.type}</td>
    <td>{props.exercise.category}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.progressionId ? "" : "Yes"}</td>
    <td>
      <Link to={"/exercise/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = { exercises: [] };
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

  deleteExercise(id) {
    axios.delete("http://localhost:5000/exercises/" + id).then((response) => {
      console.log(response.data);
    });

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

  render() {
    return (
      <div>
        <Navbar />
        <h3 style={{color:'white',textAlign:'center',letterSpacing:'2px'}}>All Exercises</h3>
        <table style={{color:'#27f3ee'}} className="table">
          <thead className="thead-light">
            <tr>
              <th>Exercise Name</th>
              <th>Type</th>
              <th>Category</th>
              <th>Description</th>
              <th>Progression</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{color:'whitesmoke'}}>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
