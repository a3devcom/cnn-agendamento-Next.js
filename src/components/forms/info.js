import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import PersonalInfo from './PersonalInfo';
import HealthCare from './HealthCare';
import Review from './Review';
import StepperCo from '../StepperCO';
import Navbar from '../Navbar';
import Success from './Success'
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

  return (
    <Box>
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
            <Success />
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
                  sx={{ mt: 3, ml: 1,'&:hover': {
                    backgroundColor: '#48bbc1',
                    color: '#fff',
                  }, }}
                >
                  {activeStep === steps.length - 1 ? 'Confirmar' : 'Próximo'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </Box>
  );
}