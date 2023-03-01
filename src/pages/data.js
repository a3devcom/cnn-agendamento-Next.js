import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

const DateSelection = () => {
  return (
    <Box 
      className="flex flex-col items-center justify-center h-screen"
    >
      <Box
        className="flex flex-col w-3/4"
      >
      <h1 className='text-h5 mb-10'>Que dia deseja agendar?</h1>
      <DatePicker
  renderInput={(props) => (
    <TextField
      {...props}
      label="Select a date"
      InputLabelProps={{
        shrink: true,
      }}
    />
  )}
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