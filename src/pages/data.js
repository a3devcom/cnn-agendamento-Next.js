import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { useEffect, useContext } from 'react';
import Context from '@/context';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import StepperCO from '@/components/StepperCO';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Head from 'next/head';
import Typography from '@mui/material/Typography';

const DateSelection = () => {
  const router = useRouter();  
  const { selectedDate, setSelectedDate } = useContext(Context);

  useEffect(() => {
    setSelectedDate(dayjs());
  }, []);

  const handleClick = () => {
    router.push('/horarios');
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }} className="flex items-center justify-center h-screen">
    <Head>
        <title>Clínica Frei Galvão</title>
    </Head>
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >  
    <Box 
      className="flex flex-col items-center justify-center "
    >
      <StepperCO
      currentStep={2}
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
        Qual dia você deseja agendar?
      </Typography>
      <DatePicker
        value={selectedDate}
        onChange={(date) => setSelectedDate(dayjs(date).format('YYYY-MM-DD'))}
        renderInput={(params) => <TextField {...params} />}
        disablePast
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end',  marginTop: '2rem' }}>
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            Voltar
          </Button>
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{ mt: 3, ml: 1, '&:hover': {
              backgroundColor: '#48bbc1',
              color: '#fff',
            }, }}
          >
            Próximo
          </Button>
        </Box>
      </Box>
    </Box>
    </Paper>
    </Container>
  )
};

export default DateSelection;