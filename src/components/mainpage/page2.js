import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import gokuff from './gokuff.gif';

const Slide2 = () => {
  return (
    <Stack>
        <Typography sx={{mt:'20px'}} color={'#27f3ee'} style={{textAlign:'center',letterSpacing:'10px'}} fontSize={'50px'} fontWeight={'900'}>
            WHAT IS MUSCLE MONITOR ?
        </Typography>
        <Stack direction={'row-reverse'}>
            <Typography color={'white'} fontFamily={'monospace'} fontStyle={'bold'} fontSize={'20px'} margin={'50px 50px 20px 50px'}>
            Hear me, Subjects of Ymir. My name is Eren Yeager. I'm adressing my fellow Subjects of Ymir, speaking to you directly 
            through the power of the Founder. All the walls on the island of Paradis have crumbled to the ground, and the legions 
            of Titans burried with in have begun their march. My only goal is to protect the lives of the people of Paradis the 
            island where I was born. Right now, the nations of the world are united in the desire to exterminate my people, and 
            it won't end with our island. They won't be satsified until every last Subject of Ymir is dead. I won't let them have
            their way. The Titans of the walls, will continue their march until every trace of life beyond our shores is trampled 
            flat, and the people of Paradis are all that remains of humanity.
            </Typography>
            <img style={{transform:'scaleX(-1)'}} src={gokuff} height={'600px'} width={'600px'}/>
        </Stack>
    </Stack>
  )
}

export default Slide2