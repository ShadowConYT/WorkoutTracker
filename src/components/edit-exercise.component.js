import React, { Component } from 'react';
import axios from 'axios';

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeExerciseName = this.onChangeExerciseName.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        exerciseName: '',
        type: 'Repetition',
        category: 'Strength',
        description: '',
        progressionId: '',
        username: '',
        userId: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          exerciseName: response.data.exerciseName,
          type: response.data.type,
          category: response.data.category,
          description: response.data.description,
          progressionId: response.data.progressionId,
          userId: response.data.userId
        })
        return axios.get('http://localhost:5000/users/'+response.data.userId);
      })
      .then(response => {
        this.setState({
          username: response.data.username
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeExerciseName(e) {
    this.setState({
      exerciseName: e.target.value
    })
  }

  onChangeType(e) {
    this.setState({
        type: e.target.value
    });
  }

  onChangeCategory(e) {
    this.setState({
        category: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
        description: e.target.value
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

    axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
      .then(res => console.log(res.data));
      console.log('Exercise Updated!');

    window.location = '/exercise';
  }

  render() {
    return (
    <div>
      <h3>Edit Exercise</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Exercise Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.exerciseName}
              onChange={this.onChangeExerciseName}
              />
        </div>
        <div className="form-group">
          <label>Type: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.type}
              onChange={this.onChangeType}>
                  <option value="Repetition">Repetition</option>
                  <option value="Duration">Duration</option>
          </select>
        </div>
        <div className="form-group">
          <label>Category: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.category}
              onChange={this.onChangeCategory}>
                  <option value="Strength">Strength</option>
                  <option value="Cardio">Cardio</option>
                  <option value="Mobility">Mobility</option>
                  <option value="Others">Others</option>  
          </select>
        </div>        
        <div className="form-group">
          <label>Description: </label>
          <input 
              type="textarea" 
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>User: </label>
          <p>{this.state.username}</p>
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Exercise" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}