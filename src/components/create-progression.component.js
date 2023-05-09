import React, { Component } from "react";
import axios from "axios";
import { MDBTable } from 'mdb-react-ui-kit';
import Navbar from "./navbar.component";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.exerciseName}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.progressionId ? "" : "Yes"}</td>
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

const SelectedExercise = (props) => (
  <tr>
    <td>{props.exercise.exerciseName}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.progressionId ? "" : "Yes"}</td>
    <td>
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class CreateProgression extends Component {
  constructor(props) {
    super(props);

    this.onChangeProgramName = this.onChangeProgramName.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.addExercise = this.addExercise.bind(this);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.allExerciseList = this.allExerciseList.bind(this);
    this.selectedExerciseList = this.selectedExerciseList.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      programName: "",
      category: "Strength",
      description: "",
      exercises: [],
      allExercises: [],
      selectedExercises: [],
      userId: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            allExercises: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeProgramName(e) {
    this.setState({
      programName: e.target.value,
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  addExercise(id) {
    const exercise = this.state.allExercises.filter((el) => el._id === id);
    this.setState({
      exercises: this.state.exercises.concat(id),
      selectedExercises: this.state.selectedExercises.concat(exercise),
      allExercises: this.state.allExercises.filter((el) => el._id !== id),
    });
  }

  deleteExercise(id) {
    const exercise = this.state.selectedExercises.filter((el) => el._id === id);
    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
      allExercises: this.state.allExercises.concat(exercise),
      selectedExercises: this.state.selectedExercises.filter(
        (el) => el._id !== id
      ),
    });
  }

  allExerciseList() {
    return this.state.allExercises.map((currentExercise) => {
      return (
        <Exercise
          exercise={currentExercise}
          addExercise={this.addExercise}
          key={currentExercise._id}
        />
      );
    });
  }

  selectedExerciseList() {
    if (this.state.selectedExercises.length > 0) {
      return this.state.selectedExercises.map((currentExercise) => {
        return (
          <SelectedExercise
            exercise={currentExercise}
            deleteExercise={this.deleteExercise}
            key={currentExercise._id}
          />
        );
      });
    } else {
      // console.log(this.state.selectedExercises);
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const progression = {
      programName: this.state.programName,
      category: this.state.category,
      description: this.state.description,
      exercises: this.state.exercises,
      userId: this.state.userId,
    };

    console.log(progression);

    axios
      .post("http://localhost:5000/progressions/add", progression)
      .then((res) => console.log(res.data));

    //window.location = '/progression';
  }

  render() {
    return (
      <div style={{color:'white'}}>
        <Navbar />
        <h3 style={{color:'white',textAlign:'center'}}>Create New Progression</h3>
        <form onSubmit={this.onSubmit}>
          <div style={{textAlign:'center'}} className="form-group">
            <label style={{color:'#27f3ee', fontWeight:"bolder",letterSpacing:'2px',padding:'10px 0px 10px 0px'}}>Progression Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.progression}
              onChange={this.onChangeProgramName}
            />
          </div>
          <div style={{textAlign:'center'}} className="form-group">
            <label style={{color:'#27f3ee', fontWeight:"bolder",letterSpacing:'2px',padding:'10px 0px 10px 0px'}}>Category: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.category}
              onChange={this.onChangeCategory}
            >
              <option value="Strength">Strength</option>
              <option value="Cardio">Cardio</option>
              <option value="Mobility">Mobility</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div style={{textAlign:'center'}} className="form-group">
            <label style={{color:'#27f3ee', fontWeight:"bolder",letterSpacing:'2px',padding:'10px 0px 10px 0px'}}>Description: </label>
            <input
              type="textarea"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div style={{textAlign:'center'}} className="form-group">
            <label style={{color:'#27f3ee', fontWeight:"bold",letterSpacing:'2px',padding:'10px 0px 10px 0px'}}>Available Exercises: </label>
            <MDBTable  responsive={true} style={{color: "white"}}>
                <thead className="thead-light">
                  <tr>
                    <th>Exercise Name</th>
                    <th>description</th>
                    <th>Progression</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{this.allExerciseList()}</tbody>
            </MDBTable>
          </div>
          <div style={{textAlign:'center'}} className="form-group">
            <label style={{color:'#27f3ee', fontWeight:"bolder",letterSpacing:'2px',padding:'10px 0px 10px 0px'}}>Selected Exercises: </label>
            <MDBTable responsive={true} style={{color: "white"}}>
                <thead  className="thead-light">
                  <tr>
                    <th>Exercise Name</th>
                    <th>description</th>
                    <th>Progression</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{this.selectedExerciseList()}</tbody>
            </MDBTable>
          </div>
          <div style={{textAlign:'center',marginBottom:'5vh'}} className="form-group">
            <input
              type="submit"
              value="Create Progression"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
