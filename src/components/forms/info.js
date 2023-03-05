import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonalInfo from './PersonalInfo';
import HealthCare from './HealthCare';
import Review from './Review';
import StepperCo from '../StepperCO';
import Navbar from '../Navbar';
import PrintIcon from '@mui/icons-material/Print';
import HomeIcon from '@mui/icons-material/Home';
import router from 'next/router';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://clinicafreigalvao.com.br/">
        Clínica Frei Galvão
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['PersonalInfo', 'HealthCare', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <HealthCare />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleHome = () => {
    router.push('/');
  };

  return (
    <ThemeProvider
      theme={createTheme({
        typography: {
          fontFamily: 'Space Grotesk',
        },
      })}
    >
      <CssBaseline />
      <Navbar/>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper 
        variant="outlined" 
        sx={{ 
          my: { xs: 3, md: 6 }, 
          p: { xs: 2, md: 3 } 
          }}>
          <Box>
          <StepperCo
          currentStep={4}
          />
          </Box>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h4" gutterBottom className='mt-5 font-bold'>
                Agendamento realizado com sucesso.
              </Typography>
              <Box className=" pt-1 pb-5 pl-5 pr-5 border-2 solid rounded-lg">
              <Typography variant="h6"  className='mt-5 font-medium'>
                Informações do agendamento 12548549
              </Typography>
              <Typography variant="subtitle1">
                icon Oftalmologia
                <br/>
                icon Dr.Flavio David Hirtsch
                <br/>
                icon Sexta-feira, 29/03/2023, a partir das 14:00
                <br/>
                icon Clínica Frei Galvão
                <br/>
                icon Rua Frei Galvão, 1000 - Centro, São Paulo - SP, 01001-000
                <br/>
                icon R$ 230,00
                <br/>
                icon ou Amil Saúde
              </Typography>
              </Box>
              <Typography variant="h6" className='mt-5'>
                Como será o atendimento?
              </Typography>
              <Typography variant="subtitle1">
                Ao chegar na clínica, você se identificará na recepcão. Em seguida você será direcionado para a sala de espera. O médico irá entrar em contato com você para iniciar o atendimento. O tempo estimado é de 30 minutos.
              </Typography>
              <Typography variant="h6" className='mt-5'>
                Dúvidas ou cancelamentos?
              </Typography>
              <Typography variant="subtitle1">
                Caso tenha alguma dúvida ou queira cancelar o agendamento, entre em contato com a clínica pelo telefone (11) 3333-3333 ou pelo Whatsapp (11) 99999-9999.
              </Typography>
              <Button 
                sx={{
                backgroundColor: '#2880bb',
                '&:hover': {
                backgroundColor: '#48bbc1',
                color: '#fff',
              },
              }}
              className='mt-5'
              variant="contained"
              startIcon={<PrintIcon />}
              onClick={ handlePrint }
              >
                Imprimir
              </Button>
              <Button 
                sx={{
                backgroundColor: '#2880bb',
                '&:hover': {
                backgroundColor: '#48bbc1',
                color: '#fff',
              },
              }}
              className='mt-5 ml-5'
              variant="contained"
              startIcon={<HomeIcon />}
              onClick={ handleHome }
              >
                Voltar para o Início
              </Button>       
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Voltar
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Confirmar' : 'Próximo'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}