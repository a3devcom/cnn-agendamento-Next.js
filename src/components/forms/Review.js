import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppoinmentInfo from '../AppoinmentInfo';
import Box from '@mui/material/Box';

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom className='mt-5 font-bold'>
        Confirme os dados preenchidos, para validar o agendamento: 
      </Typography>
      <Box className=" pt-1 pb-5 pl-5 pr-5 border-2 solid rounded-lg">
      <AppoinmentInfo/>
      </Box>
    </React.Fragment>
  );
}