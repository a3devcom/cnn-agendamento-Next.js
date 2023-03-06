import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
import NextBackButton from '@/components/NextBackButton';

const DateSelection = () => {
  const router = useRouter();  
  const { selectedDate, setSelectedDate, typeSelect } = useContext(Context);

  useEffect(() => {
    setSelectedDate(dayjs());
  }, []);

  const handleClick = () => {
    router.push('/horarios');
  };

  const handleBack = () => {
    if(typeSelect === 'Consulta') {
      router.push('/');
    } else {
      router.push('/procedimento');
    }
    
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
      <NextBackButton handleClick={ handleClick } handleBack={ handleBack }/>
      </Box>
    </Box>
    </PaperContainer>
    <Copyright />
    </>
  )
};

export default DateSelection;