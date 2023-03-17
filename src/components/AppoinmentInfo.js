import Typography from '@mui/material/Typography';
import MedicalInformationIcon from '@mui/icons-material/MedicalServices';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TodayIcon from '@mui/icons-material/Today';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MapIcon from '@mui/icons-material/Map';
import PaidIcon from '@mui/icons-material/Paid';
import { useContext, useEffect, useState } from 'react';
import Context from '@/context';
import dayjs from 'dayjs';
import axios from 'axios';
import Loading from './Loading';
import { useRouter } from 'next/router';

export default function AppoinmentInfo() {
  const { chosenProfessional, selectedDate, appointmentTime, pagamento, setNomeConvenio, nomeConvenio  } = useContext(Context);

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getInsurance = async () => {
      if(pagamento === '' || chosenProfessional === null || selectedDate === undefined) {
        router.push('/');
      }
      if(pagamento !== 'Particular' && pagamento !== '') {
        const response = await axios.get(`/api/getInsuranceById?id=${pagamento.toString()}`);
  
        setNomeConvenio(response.data.nome);
      }
      setIsLoading(false);
    };

    getInsurance();
  }, []);

  return (

          <>
            {isLoading ? <Loading /> : (
            <>
              <div className='flex flex-row items-center mb-3'>
              <VisibilityIcon fontSize='small' className='mr-2'/>
              <Typography variant="subtitle1">
                Oftalmologia
              </Typography>
              </div>
              <div className='flex flex-row items-center mb-3'>
                <MedicalInformationIcon fontSize='small' className='mr-2'/>
                <Typography variant="subtitle1">
                  Dr. {chosenProfessional.nome}
                </Typography>
              </div>
              <div className='flex flex-row items-center mb-3'>
                <TodayIcon fontSize='small' className='mr-2'/>
                <Typography variant="subtitle1">
                  {dayjs(selectedDate).format('DD/MM/YYYY')}, às { appointmentTime.split(':00')[0] } h
                </Typography>
              </div>
              <div className='flex flex-row items-center mb-3'>
                <LocationOnIcon fontSize='small' className='mr-2'/>
                <Typography variant="subtitle1">
                  Clínica Frei Galvão
                </Typography>
              </div>
              <div className='flex flex-row items-center mb-3'>
                <MapIcon fontSize='small' className='mr-2'/>
                <Typography variant="subtitle1">
                  Rua Sete de Setembro, 198 - Centro - CEP 12500-330 - Guaratinguetá - SP
                </Typography>
              </div>
              
                { pagamento === 'Particular' && (
                  <div className='flex flex-row items-center mb-3'>
                    <PaidIcon fontSize='small' className='mr-2'/>
                    <Typography variant="subtitle1">
                      R$ 230,00
                    </Typography>
                  </div>
                ) }
                
              
              { pagamento !== 'Particular' && (
                <div className='flex flex-row items-center'>
                  <LocalHospitalIcon fontSize='small' className='mr-2'/>
                  <Typography variant="subtitle1">
                    { nomeConvenio }
                  </Typography>
              </div>
              )}

            </>              
            )}

          </>
  );
}