import React, { Component } from "react";

import Slide1 from '../components/mainpage/page1';
import Slide2 from '../components/mainpage/page2';
import { Container } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid><Slide1/></Container>
        <Container fluid><Slide2/></Container>
      </div>
    );
  }
}
