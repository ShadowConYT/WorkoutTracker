import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import goku from './goku.png';
import {Image, Container } from 'react-bootstrap';

const Slide2 = () => {
  return (
    <Container fluid >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '5vh' }}></Box>

    <Box sx={{ mt: { lg: '15px', xs: '70px' }, ml: { lg:'70px', sm: '50px' } }} position="relative" p="20px" >
    <Stack>
        <Typography sx={{mt:{lg:'20px',xs:'10px'}}} color={'#27f3ee'} style={{textAlign:'center',letterSpacing:'10px'}} fontSize={{lg:'50px',xs:'30px'}} fontWeight={'900'}>
            WHAT IS MUSCLE MONITOR ?
        </Typography>
        <Stack direction={'row'} spacing={{ xs: 1, sm: 2, md: 4 }} >
        <Image className='img-fluid' alt='image' style={{transform:'scaleX(-1)',zIndex:-1,
            display:'flex',width:'15%',height:'100%',position:'relative',
            top:'auto',padding:'0',marginLeft:'2%'}} src={goku}/>
            <Typography sx={{ mt: { lg: '70px', xs: '30px' },ml:{lg:'100px',sm:'20px'}, mr: { lg:'5%', sm: '20px' },textAlign:'center', fontSize:{lg: '30px',md:'25px',sm:'20px',xs:'15px'}}}
             color={'white'} fontFamily={"sans-serif"} fontStyle={'bold'} margin={'50px 50px 20px 50px'}>
            Muscle Monitor, the cutting-edge web application designed to be your ultimate workout companion. Whether you're a seasoned gym enthusiast or just starting out on your fitness adventure, Muscle Monitor is here to help you achieve your goals, track your progress, and stay motivated every step of the way.
At Muscle Monitor, we understand the importance of personalized fitness experiences. That's why our web app is meticulously crafted to cater to your unique needs and aspirations. Our mission is to empower you with the tools and knowledge to optimize your workouts, reach new milestones, and transform your body.
            </Typography>
            </Stack>

            
    </Stack>
    </Box>
    </Container>
  )
}

export default Slide2