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
    <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 4, display: 'flex', flexDirection: 'column' }} className="flex items-center justify-center h-screen">
      <Head>
        <title>Clínica Frei Galvão</title>
      </Head>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
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
            disabled={procedureSelect === ''} 
          >
            Próximo
          </Button>
        </Box>
      </Box>
    </Box>
    </Paper>
    <Copyright />
    </Container>
  )
};

export default ProcedureSelection;