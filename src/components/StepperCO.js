import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import useMediaQuery from '@mui/material/useMediaQuery';


const StepperCO = ({currentStep}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
      <Stepper 
        activeStep={currentStep}
        orientation={isMobile ? 'vertical' : 'horizontal'} sx={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <Step>
          <StepLabel>Agendamento</StepLabel>
        </Step>
        <Step>
          <StepLabel>Procedimento</StepLabel>
        </Step>
        <Step>
          <StepLabel>Data</StepLabel>
        </Step>
        <Step>
          <StepLabel>Horário</StepLabel>
        </Step>
        <Step>
          <StepLabel>Informações</StepLabel>
        </Step>
      </Stepper>
  )
}

export default StepperCO;