import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useContext, useEffect, useState } from 'react';
import Context from '../context';
import { useRouter } from 'next/router';
import StepperCO from '../components/StepperCO';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Copyright from '@/components/Copyright';
import PaperContainer from '../components/PaperContainer'
import NextBackButton from '@/components/NextBackButton';
import axios from 'axios';
import Loading from '@/components/Loading';

const ProcedureSelection = () => {
  const { procedureSelect, setProcedureSelect, typeSelect } = useContext(Context);

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [procedures, setProcedures] = useState([]);

  useEffect(() => {
    if (typeSelect === '' || typeSelect === 'Consulta') {
      router.push('/');
    }

    const getProcedures = async () => {
      const response = await axios.get(`/api/getProcedures?type=${typeSelect}`);

      setProcedures(response.data);
    };
  
    getProcedures();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [procedures]);

  const handleClick = () => {
    router.push('/data');
  };

  const handleBack = () => {
    router.push('/');
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setProcedureSelect(value);
  };

  return (
    <>
      <Head>
        <title>Clínica Frei Galvão</title>
      </Head>
      { isLoading ? <Loading /> : (
        <PaperContainer>  
        <Box 
          className="flex flex-col items-center justify-center"
        >
          <StepperCO
          currentStep={1}
          />
          <Box
            className="flex flex-col w-3/4"
          >
          <Typography
          variant="h5" 
          gutterBottom
          className='mt-5'
          sx={{marginBottom: '1rem', fontWeight: 'bold'}}
          >
            Qual procedimento você deseja realizar?
          </Typography>
          <TextField
              className="w-full"
              id="outlined-select-currency"
              select
              value={procedureSelect}
              label='Insira o procedimento desejado'
              onChange={handleChange}
            >
              { procedures.map((procedure) => <MenuItem value={procedure.id} key={procedure.id}>{procedure.nome}</MenuItem>) }              
            </TextField>
            <NextBackButton disabled={procedureSelect === ''} handleClick={ handleClick } handleBack={ handleBack } />
          </Box>
        </Box>
        </PaperContainer>
      )}
            
    <Copyright />
    </>
  )
};

export default ProcedureSelection;