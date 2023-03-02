import { useEffect, useContext, useState } from "react";
import Context from "@/context";
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import dayjs from 'dayjs';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';

const Horarios = () => {
  const { 
    selectedDate,
    professionals, 
    setProfessionals, 
    disponibility, 
    setDisponibility, 
    setAppointmentTime,
    setChosenProfessional 
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
    const { name, pid, hour } = event.currentTarget.attributes;
  
    setAppointmentTime(hour.value);
    setChosenProfessional({ nome: name.value, id: pid.value });

    router.push('/info')
  };

  return(
    isLoading ? <div className="flex w-full h-screen justify-center items-center">
        <CircularProgress size='5rem'/>
      </div> : 
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col w-3/4 h-screen justify-center items-center">
          <h1 className="text-h5">Escolha o horário da consulta</h1>
          {disponibility.map((professional) => (
            <Accordion sx={{ width: '100%'}} key={professional.nome}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{professional.nome}</Typography>
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
                    onClick={handleClick}
                    sx={{ marginRight: '0.5rem', marginTop: '0.5rem'}}
                    color="primary" 
                  />
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
  );
};

export default Horarios;