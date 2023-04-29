import React, { Component } from "react";
import Navbar from "./navbar.component";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <p>Welcome to Workout Tracker App!</p>
        </div>
      </div>
    );
  }
}
