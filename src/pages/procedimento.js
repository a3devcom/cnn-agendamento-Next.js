import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useContext, useEffect } from 'react';
import Context from '../context';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import StepperCO from '../components/StepperCO';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Copyright from '@/components/Copyright';
import PaperContainer from '../components/PaperContainer'
import NextBackButton from '@/components/NextBackButton';

const ProcedureSelection = () => {
  const { procedureSelect, setProcedureSelect, typeSelect } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (typeSelect === '') {
      router.push('/');
    }
  }, []);

  const handleClick = () => {
    router.push('/data');
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setProcedureSelect(value);
  };

  const cirurgias = ['Blefaroplastia', 'Simblefaro', 'Retirada de Verrugas'];
  const exames = ['Mapeamento de retina', 'Biometria ultrassônica'];

  return (
    <>
      <Head>
        <title>Clínica Frei Galvão</title>
      </Head>
    <PaperContainer>  
    <Box 
      className="flex flex-col items-center justify-center"
    >
      <StepperCO
      currentStep={1}
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
        Qual procedimento você deseja realizar?
      </Typography>
      <TextField
          className="w-full"
          id="outlined-select-currency"
          select
          value={procedureSelect}
          label='Insira o procedimento desejado'
          onChange={handleChange}
        >
          { typeSelect === 'Cirurgia' && cirurgias.map((cirurgia) => <MenuItem key={cirurgia} value={cirurgia}>{cirurgia}</MenuItem>)}
          { typeSelect === 'Exame' && exames.map((exame) => <MenuItem key={exame} value={exame}>{exame}</MenuItem>)}      
          
        </TextField>
        <NextBackButton disabled={procedureSelect === ''} handleClick={ handleClick } handleBack={ handleBack } />
      </Box>
    </Box>
    </PaperContainer>        
    <Copyright />
    </>
  )
};

export default ProcedureSelection;