import { useEffect, useContext, useState } from "react";
import Context from "@/context";
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";

const Horarios = () => {
  const { selectedDate, professionals, setProfessionals, disponibility, setDisponibility } = useContext(Context);
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
        const response = await axios.get(`/api/getDisponibility/?id=${id}`);
        return { nome, disponibility: response.data };
      });
      const result = await Promise.all(promises);
      console.log(result);
      setDisponibility(result);
    };

    getDisponibility();
  }, [professionals]);

  return(
    isLoading ? <div className="flex w-full h-screen justify-center items-center">
        <CircularProgress size='5rem'/>
      </div> : <div>
      Oi
    </div>
  );
};

export default Horarios;