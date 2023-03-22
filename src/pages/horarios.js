import { useEffect, useContext, useState } from "react";
import Context from "@/context";
import { useRouter } from 'next/router';
import axios from "axios";
import dayjs from 'dayjs';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import StepperCo from '@/components/StepperCO';
import Head from 'next/head';
import { Button } from "@mui/material";
import Copyright from '@/components/Copyright';
import PaperContainer from '../components/PaperContainer'
import Loading from "@/components/Loading";

const Horarios = () => {
  const { 
    selectedDate,
    professionals, 
    setProfessionals, 
    disponibility, 
    setDisponibility, 
    setAppointmentTime,
    setChosenProfessional,
    setEndTime
  } = useContext(Context);

  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if(selectedDate === undefined) {
      router.push('/');
    }

    const getProfessionals = async () => {
      const response = await axios.get('/api/getProfessionals');
      setProfessionals(response.data);
    };
  
    getProfessionals();    
  }, []);

  useEffect(() => {
    const getDisponibility = async () => {
      const promises = professionals.map(async (professional) => {
        const { id, nome } = professional;
        const response = await axios.get(`/api/getDisponibility/?id=${id}&date=${dayjs(selectedDate).format('YYYY-MM-DD')}`);

        return { id, nome, disponibility: response.data };
      });

      const result = await Promise.all(promises);

      setDisponibility(result);
      setIsLoading(false);
    };

    getDisponibility();
  }, [professionals]);

  const handleClick = (event) => {
    const { name, pid, hour, end } = event.currentTarget.attributes;
  
    setAppointmentTime(hour.value);
    setEndTime(end.value);

    const idPessoa = professionals.filter((professional) => professional.id === Number(pid.value))[0].idpessoa;

    setChosenProfessional({ nome: name.value, id: pid.value, idPessoa });

    router.push('/info')
  };

  const handleBack = () => {
    router.push('/data');
  };

  return(
    isLoading ? <Loading /> : 
      <>
      <Head>
        <title>Clínica Frei Galvão</title>
      </Head>
      <PaperContainer>
      <div className="flex flex-col w-full justify-center items-center">
        <StepperCo
          currentStep={1}
        />
        <div className="flex flex-col w-3/4 justify-center items-center">
        <Typography
          variant="h6" 
          gutterBottom
          className='mt-5'
          sx={{marginBottom: '1rem', fontWeight: 'bold'}}
        >
        Selecione o melhor horário para agendarmos a sua consulta:
        </Typography>
          {disponibility.map((professional) => (
            <Accordion sx={{ width: '100%'}} key={professional.nome}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{`Dr. ${professional.nome}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                { professional.disponibility.length === 0 ?
                <Typography>Sem horários disponíveis neste dia</Typography> :
                  professional.disponibility.map((horario) => (
                  <Chip
                    label={`${horario.horaInicio.split(':')[0]}:${horario.horaInicio.split(':')[1]} h`}
                    key={Math.random()}
                    name={professional.nome}
                    pid={professional.id}
                    hour={horario.horaInicio}
                    end={horario.horaFim}
                    onClick={handleClick}
                    sx={{ marginRight: '0.5rem', marginTop: '0.5rem'}}
                    color="primary" 
                  />
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            Voltar
        </Button>
      </div>
      </PaperContainer>
      <Copyright />
      </>
  );
};

export default Horarios;