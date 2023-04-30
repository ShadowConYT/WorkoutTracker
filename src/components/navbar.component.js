import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-* navbar-expand-lg">
          <Link to="/" id="navb" className="navbar-brand" style={{paddingLeft:'85px'}}>
            <img src={logo} style={{width:'50px',height:'50px'}} alt="logo" />
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" id="navb" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/workout" id="navb" className="nav-link">
                  All Workouts
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/workout/add" id="navb" className="nav-link">
                  Log Workout
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/routine/add" id="navb" className="nav-link">
                  Create Routine
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/exercise" id="navb" className="nav-link">
                  All Exercises
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/progression/add" id="navb" className="nav-link">
                  Create Progression
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/exercise/add" id="navb" className="nav-link">
                  Create Exercise
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/user/add" id="navb" className="nav-link">
                  Create User
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
