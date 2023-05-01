import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./navbar.component";

export default class CreateWorkoutLog extends Component {
  constructor(props) {
    super(props);

    this.onChangeWorkoutDate = this.onChangeWorkoutDate.bind(this);
    this.onChangeRoutineName = this.onChangeRoutineName.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      workoutDate: new Date(),
      routineName: '',
      routines: [],
      duration: 0,
      username: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
    .then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username
        })
      }
    })
    .catch((error) => {
      console.log(error);
    })

    axios.get('http://localhost:5000/routines/')
    .then(response => {
      if (response.data.length > 0) {
        this.setState({
          routines: response.data.map(routine => routine.routineName),
          routineName: response.data[0].routineName
        })
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  onChangeWorkoutDate(date) {
    this.setState({
      date: date
    });
  }

  onChangeRoutineName(e) {
    this.setState({
      routineName: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const workoutLog = {
      workoutDate: this.state.workoutDate,
      routineName: this.state.routineName,
      duration: this.state.duration,
      username: this.state.username,
    };
  
    console.log(workoutLog);

    axios.post('http://localhost:5000/workoutLogs/add', workoutLog)
    .then(res => console.log(res.data));

    window.location = '/workout';
  }

  render() {
    return (
      <div>
        <Navbar />
        <h3 style={{textAlign:'center',fontWeight:'bold',textTransform:'uppercase',marginBottom:'5px',fontSize:'900',letterSpacing:'2px',color:'white'}}>Log Workout</h3>
        <br/>  <form onSubmit={this.onSubmit}>
        <div style={{textAlign:'center',fontWeight:'bolder',marginBottom:'5px',fontSize:'large'}} className="form-group">
            <label>Workout Date: </label>
            <div>
              <DatePicker
                selected={this.state.workoutDate}
                onChange={this.onChangeWorkoutDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={1}
                dateFormat="LLL"
              />
            </div>
          </div>
        <div style={{textAlign:'center'}} className="form-group"> 
            <label style={{fontWeight:'bolder',marginBottom:'5px',fontSize:'large'}}>Routine Name: </label>
            <select style={{width:'50%',left:'auto',right:'auto',position:'relative'}} ref="userInput"
                required
                className="form-control"
                value={this.state.routineName}
                onChange={this.onChangeRoutineName}>
                {
                  this.state.routines.map(function(routine) {
                    return <option 
                      key={routine}
                      value={routine}>{routine}
                      </option>;
                  })
                }
            </select>
          </div>
          <div style={{textAlign:'center'}} className="form-group">
            <label style={{fontWeight:'bolder',marginBottom:'5px',fontSize:'large'}}>Duration (in minutes): </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                />
          </div>
          <div style={{textAlign:'center'}} className="form-group"> 
            <label style={{fontWeight:'bolder',marginBottom:'5px',fontSize:'large'}}>User: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div style={{textAlign:'center'}} className="form-group">
            <input type="submit" value="Log Workout" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}