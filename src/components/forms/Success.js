import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PrintIcon from '@mui/icons-material/Print';
import HomeIcon from '@mui/icons-material/Home';
import { useContext } from 'react';
import Context from '@/context';
import dayjs from 'dayjs';

import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';

const Success = () => {
  const { chosenProfessional, selectedDate, appointmentTime } = useContext(Context);

  const handlePrint = () => {
    window.print();
  };

  const handleHome = () => {
    router.push('/');
  };

  return(
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
          <MedicalInformationIcon fontSize='small'/> Dr. {chosenProfessional.nome}
          <br/>
          icon {dayjs(selectedDate).format('DD-MM-YYYY')}, a partir das { appointmentTime.split(':00')[0] } h
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
            Caso tenha alguma dúvida ou queira cancelar agendamento, entre em contato com a clínicpelo telefone (11) 3333-3333 ou pelo Whatsap(11) 99999-9999.
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
  );
}

export default Success;