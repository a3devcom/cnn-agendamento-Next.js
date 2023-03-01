import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const DateSelection = () => {
  const [selectedDate, setSelectedDate] = useState();
  return (
    <Box 
      className="flex flex-col items-center justify-center h-screen"
    >
      <Box
        className="flex flex-col w-3/4"
      >
      <h1 className='text-h5 mb-10'>Que dia deseja agendar?</h1>
      <DatePicker
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        renderInput={(params) => <TextField {...params} />}
        disablePast
      />
        <Button 
          sx={{
            marginTop: '2rem',
            width: '100%',
          }}
          variant="contained"
        >
          Continuar
        </Button>
      </Box>

    </Box>
  )
};

export default DateSelection;