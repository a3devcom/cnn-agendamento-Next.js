import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { useEffect, useContext } from 'react';
import Context from '@/context';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import StepperCO from '@/components/StepperCO';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Copyright from '@/components/Copyright';
import PaperContainer from '../components/PaperContainer'
import { Button } from '@mui/material';

const DateSelection = () => {
  const router = useRouter();  
  const { selectedDate, setSelectedDate, typeSelect } = useContext(Context);

  useEffect(() => {
    setSelectedDate(dayjs());
  }, []);

  const handleClick = () => {
    router.push('/horarios');
  };

  return (
    <>
    <Head>
        <title>Clínica Frei Galvão</title>
    </Head>
    <PaperContainer>
    <Box 
      className="flex flex-col items-center justify-center "
    >
      <StepperCO
      currentStep={0}
      />
      <Box
        className="flex flex-col w-3/4"
      >
      <Typography
      variant="h5" 
      gutterBottom
      className='mt-5'
      sx={{marginBottom: '1rem', fontWeight: 'bold'}}
      >
        Quando você deseja agendar sua consulta?
      </Typography>
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
              '&:hover': {
                backgroundColor: '#48bbc1',
                color: '#fff',
              },
            }}
            variant="contained"
            onClick={ handleClick }
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Próximo
          </Button>
      </Box>
    </Box>
    </PaperContainer>
    <Copyright />
    </>
  )
};

export default DateSelection;