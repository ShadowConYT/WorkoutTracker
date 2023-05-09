import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import gokuff from './gokuff.gif';
import { Container } from 'react-bootstrap';

const Slide2 = () => {
  return (
    <Container fluid >
    <Stack>
        <Typography sx={{mt:{lg:'20px',xs:'10px'}}} color={'#27f3ee'} style={{textAlign:'center',letterSpacing:'10px'}} fontSize={{lg:'50px',xs:'30px'}} fontWeight={'900'}>
            WHAT IS MUSCLE MONITOR ?
        </Typography>
        <Stack direction={'row-reverse'}>
            <Typography sx={{ mt: { lg: '15px', xs: '30px' }, mr: { lg:'0px', sm: '200px' }, fontSize:{lg: '20px',sm:'5px'},margin:{sm:'none'}}}
             color={'white'} fontFamily={'monospace'} fontStyle={'bold'} fontSize={'20px'} margin={'50px 50px 20px 50px'}>
            Hear me, Subjects of Ymir. My name is Eren Yeager. I'm adressing my fellow Subjects of Ymir, speaking to you directly 
            through the power of the Founder. All the walls on the island of Paradis have crumbled to the ground, and the legions 
            of Titans burried with in have begun their march. My only goal is to protect the lives of the people of Paradis the 
            island where I was born. Right now, the nations of the world are united in the desire to exterminate my people, and 
            it won't end with our island. They won't be satsified until every last Subject of Ymir is dead. I won't let them have
            their way. The Titans of the walls, will continue their march until every trace of life beyond our shores is trampled 
            flat, and the people of Paradis are all that remains of humanity.
            </Typography>
            <img style={{transform:'scaleX(-1)',      
          zIndex:-1,display:'none'}} src={gokuff} height={'600px'} width={'600px'}/>
        </Stack>
    </Stack>
    </Container>
  )
}

export default Slide2