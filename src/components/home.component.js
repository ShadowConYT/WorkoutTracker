import React, { Component } from "react";
import Navbar from "./navbar.component";
import { Box, Stack, Typography } from '@mui/material';
import mike from './mike.png';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Box sx={{ mt: { lg: '15px', xs: '70px' }, ml: { lg:'70px', sm: '50px' } }} position="relative" p="20px">
        <Typography color="#006dd6" fontWeight="600" fontSize="26px">Muscle Monitor</Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat and Wet <br />
        And Repeat
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
        </Typography>
        <Stack>
        <a className='button' href="#exercises" style={{ marginTop: '30px', textDecoration: 'none', width: '200px', textAlign: 'center', padding: '14px', fontSize: '22px', textTransform: 'none'}}>
          <div class="button__line"></div>
          <div class="button__line"></div>
          <span class="button__text">Explore Exercises</span>
          <div class="button__drow1"></div>
          <div class="button__drow2"></div></a>
        </Stack>
        <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '155px' }}>
        Exercise
        </Typography>
        <img src={mike} style={{
          position:'absolute',
          right:'0',
          marginTop:'-0.78%',
          top:'0',
          padding:'0',
          width: '45%',
        }} />
        </Box>
      </div>
    );
  }
}
