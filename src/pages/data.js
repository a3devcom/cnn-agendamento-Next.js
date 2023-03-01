import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { useEffect, useContext } from 'react';
import Context from '@/context';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

const DateSelection = () => {
  const router = useRouter();  
  const { selectedDate, setSelectedDate } = useContext(Context);

  useEffect(() => {
    setSelectedDate(dayjs());
  }, []);

  // const getAgenda = async () => {
  //   try {
  //     const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');
  //     const response = await axios.get(`/api/getAgenda?dataInicial=${formattedDate}&dataFinal=${formattedDate}`);

  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
    
  // };

  const handleClick = () => {
    router.push('/horarios');
  };

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
        onChange={(date) => setSelectedDate(dayjs(date).format('YYYY-MM-DD'))}
        renderInput={(params) => <TextField {...params} />}
        disablePast
      />
        <Button 
          sx={{
            marginTop: '2rem',
            width: '100%',
          }}
          variant="contained"
          onClick={ handleClick }
        >
          Continuar
        </Button>
      </Box>

    </Box>
  )
};

export default DateSelection;