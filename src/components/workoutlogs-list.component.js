import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dateFormat from "dateformat";
import Navbar from "./navbar.component";

const WorkoutLog = (props) => (
  <tr>
    <td>
      {dateFormat(props.workoutlog.workoutdate, "mmmm dS, yyyy, h:MM:ss TT")}
    </td>
    <td>{props.workoutlog.routinename}</td>
    <td>{props.workoutlog.duration}</td>
    <td>{props.workoutlog.username}</td>
    <td>
      <Link to={"/workout/edit/" + props.workoutlog._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteWorkoutLog(props.workoutlog._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class WorkoutLogList extends Component {
  constructor(props) {
    super(props);

    this.deleteWorkoutLog = this.deleteWorkoutLog.bind(this);
    this.state = { workoutLogs: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/workoutlogs/")
      .then((response) => {
        this.setState({ workoutLogs: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteWorkoutLog(id) {
    axios.delete("http://localhost:5000/workoutlogs/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      workoutLogs: this.state.workoutLogs.filter((el) => el._id !== id),
    });
  }

  workoutLogList() {
    return this.state.workoutLogs.map((currentWorkoutLog) => {
      return (
        <WorkoutLog
          workoutlog={currentWorkoutLog}
          deleteWorkoutLog={this.deleteWorkoutLog}
          key={currentWorkoutLog._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <h3>All Workouts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Workout Date</th>
              <th>Routine Name</th>
              <th>Duration</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.workoutLogList()}</tbody>
        </table>
      </div>
    );
  }
}
