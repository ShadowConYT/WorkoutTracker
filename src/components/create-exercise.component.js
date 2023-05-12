import React, { Component } from "react";
import axios from "axios";
import Navbar from "./navbar.component";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeExerciseName = this.onChangeExerciseName.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeUserId = this.onChangeUserId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      exerciseName: "",
      type: "Repetition",
      category: "Strength",
      description: "",
      progressionId: "",
      userId: "",
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => ({
              username: user.username,
              userid: user._id,
            })),
            userId: response.data[0]._id,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeExerciseName(e) {
    this.setState({
      exerciseName: e.target.value,
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value,
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

  onChangeUserId(e) {
    this.setState({
      userId: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      exerciseName: this.state.exerciseName,
      type: this.state.type,
      category: this.state.category,
      description: this.state.description,
      progressionId: this.state.progressionId,
      userId: this.state.userId,
    };

    console.log(exercise);

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));

    window.location = "/exercise";
  }

  render() {
    return (
      <div>
        <Navbar />
        <h3 style={{color:'white',textAlign:'center',fontWeight:'bolder',textTransform:'uppercase'}}>Create New <span style={{color:'#27f3ee'}}>Exercise</span></h3>
        <form onSubmit={this.onSubmit}>
          <div style={{color:'#27f3ee',fontWeight:'bold',paddingBottom:'10px'}} className="form-group">
            <label style={{paddingBottom:'10px'}}>Exercise Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.exerciseName}
              onChange={this.onChangeExerciseName}
            />
          </div>
          <div style={{color:'#27f3ee',fontWeight:'bold',paddingBottom:'10px'}} className="form-group">
            <label style={{paddingBottom:'10px'}}>Type: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.type}
              onChange={this.onChangeType}
            >
              <option value="Repetition">Repetition</option>
              <option value="Duration">Duration</option>
            </select>
          </div>
          <div style={{color:'#27f3ee',fontWeight:'bold',paddingBottom:'10px'}} className="form-group">
            <label style={{paddingBottom:'10px'}}>Category: </label>
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
          <div style={{color:'#27f3ee',fontWeight:'bold',paddingBottom:'10px'}} className="form-group">
            <label style={{paddingBottom:'10px'}}>Description: </label>
            <input
              type="textarea"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div style={{color:'#27f3ee',fontWeight:'bold',paddingBottom:'10px'}} className="form-group">
            <label style={{paddingBottom:'10px'}}>User: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.userId}
              onChange={this.onChangeUserId}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user.username} value={user.userid}>
                    {user.username}
                  </option>
                );
              })}
            </select>
          </div>
          <br/>
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
