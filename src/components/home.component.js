import React, { Component } from "react";

import Slide1 from '../components/mainpage/page1';
import Slide2 from '../components/mainpage/page2';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Slide1/>
        <Slide2/>
      </div>
    );
  }
}
