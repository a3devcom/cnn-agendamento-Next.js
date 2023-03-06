import Typography from '@mui/material/Typography';
import MedicalInformationIcon from '@mui/icons-material/MedicalServices';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MapIcon from '@mui/icons-material/Map';
import PaidIcon from '@mui/icons-material/Paid';
import { useContext } from 'react';
import Context from '@/context';
import dayjs from 'dayjs';

export default function AppoinmentInfo() {
  const { chosenProfessional, selectedDate, appointmentTime } = useContext(Context);
  return (

          <>
          <div className='flex flex-row items-center'>
          <VisibilityIcon fontSize='small' className='mr-2'/>
          <Typography variant="subtitle1">
            Oftalmologia
          </Typography>
          </div>
          <div className='flex flex-row items-center'>
          <MedicalInformationIcon fontSize='small' className='mr-2'/>
          <Typography variant="subtitle1">
            Dr. {chosenProfessional.nome}
          </Typography>
          </div>
          <div className='flex flex-row items-center'>
          <ScheduleRoundedIcon fontSize='small' className='mr-2'/>
          <Typography variant="subtitle1">
          {dayjs(selectedDate).format('DD/MM/YYYY')}, às { appointmentTime.split(':00')[0] } h
          </Typography>
          </div>
          <div className='flex flex-row items-center'>
          <LocationOnIcon fontSize='small' className='mr-2'/>
          <Typography variant="subtitle1">
          Clínica Frei Galvão
          </Typography>
          </div>
          <div className='flex flex-row items-center'>
          <MapIcon fontSize='small' className='mr-2'/>
          <Typography variant="subtitle1">
          Rua Sete de Setembro, 198 - Centro - CEP 12500-330 - Guaratinguetá - SP
          </Typography>
          </div>
          <div className='flex flex-row items-center'>
          <PaidIcon fontSize='small' className='mr-2'/>
          <Typography variant="subtitle1">
          R$ 230,00
          </Typography>
          </div>
          <div className='flex flex-row items-center'>
          <LocalHospitalIcon fontSize='small' className='mr-2'/>
          <Typography variant="subtitle1">
          Amil Saúde
          </Typography>
          </div>
          </>
  );
}