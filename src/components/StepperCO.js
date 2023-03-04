import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { useContext } from 'react';
import Context from '@/context';
import StepLabel from '@mui/material/StepLabel';

const StepperCO = ({currentStep}) => {
  return (
    <Stepper 
    activeStep={currentStep}
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