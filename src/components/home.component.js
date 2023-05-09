import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Slide1 from './mainpage/page1';
import Slide2 from './mainpage/page2';
import SearchExercises from "./searchexercises";
import { Container } from "react-bootstrap";
import Exercises from "./Exercises";

/*export default class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid><Slide1/></Container>
        <Container fluid><Slide2/></Container>
        <Container fluid><SearchExercises/></Container>
      </div>
    );
  }
}*/

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <Slide1 />
      <Slide2/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
