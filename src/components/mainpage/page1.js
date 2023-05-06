import React from 'react';
import gokuff from "./gokuff.gif";
import { Box, Stack, Typography } from '@mui/material';
import Navbar from '../navbar.component';
import { Container } from 'react-bootstrap';

const Slide1 = ({ setExercises, bodyPart, setBodyPart }) => {

  return (
    
    <div>
    <Navbar />
    <Container fluid>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '5vh' }}></Box>
        <Box sx={{ mt: { lg: '15px', xs: '70px' }, ml: { lg:'70px', sm: '50px' } }} position="relative" p="20px">
        {/*<Typography color="#006dd6" fontWeight="900" fontSize="50px">Muscle Monitor</Typography>*/}
        <Typography color={'white'} fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        EAT <span style={{color:'#27f3ee'}}>SWEAT</span><br />REPEAT <br />
        </Typography>
        <Typography fontSize="22px" color={'gray'}
        sx={{ mt: { lg: '15px', xs: '30px' }, mr: { lg:'0px', sm: '200px' } }} fontFamily="Alegreya" lineHeight="35px">
        "Fitness is not about being better than someone else, it's about being better than you used to be."
        </Typography>
        <Stack>
        <a className='button' href="#exercises" style={{ marginTop: '30px', textDecoration: 'none', width: '200px', textAlign: 'center', padding: '14px', fontSize: '22px', textTransform: 'none'}}>
          <div class="button__line"></div>
          <div class="button__line"></div>
          <span class="button__text" style={{letterSpacing:'2px'}}>EXPLORE</span>
          <div class="button__drow1"></div>
          <div class="button__drow2"></div></a>
        </Stack>
        <Typography fontWeight={600} color="white" sx={{mt:'40px', opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '155px' }}>
        FITNESS
        </Typography>
        <img src={gokuff} className='img-fluid' style={{
          position:'absolute',
          marginLeft:'50%',
          marginTop:'-3%',
          top:'0',
          padding:'0',
          width: '45%',
          zIndex:-1
        }} />
        </Box>
        </Container>
        </div>
    
  );
};

export default Slide1;