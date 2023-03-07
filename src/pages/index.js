import Head from 'next/head'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import Context from '@/context';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import StepperCO from '@/components/StepperCO';
import Navbar from '@/components/Navbar';
import Copyright from '@/components/Copyright';
import PaperContainer from '../components/PaperContainer'

export default function TypeSelection() {
  const { typeSelect, setTypeSelect, setProcedureSelect } = useContext(Context);
  const router = useRouter();

  const handleChange = ({ target }) => {
    const { value } = target;
    setTypeSelect(value);
  };

  const handleClick = () => {
    if (typeSelect === 'Consulta') {
      setProcedureSelect(483902);
      router.push('/data');

    } else {
      router.push('/procedimento');
    }
  };

  return (
    <>
      <Head>
        <title>Clínica Frei Galvão</title>
      </Head>
      <Navbar/>
      <PaperContainer>      
      <Box 
      className="flex flex-col items-center justify-center "
      >
        <StepperCO
          currentStep={0}
        />
        <Box
          className="flex flex-col w-3/4 mt-10"
        >
        
        <TextField
            className="w-full"
            id="outlined-select-currency"
            select
            value={typeSelect}
            label='O que você deseja agendar?'
            onChange={ handleChange }
          >
            <MenuItem value='Consulta'>Consulta</MenuItem>
            {/* <MenuItem value='Cirurgia'>Cirurgia</MenuItem> */}
            <MenuItem value='Exame'>Exame</MenuItem>
          </TextField>
          <Button 
            sx={{
              marginTop: '2rem',
              width: '100%',
              '&:hover': {
                backgroundColor: '#48bbc1',
                color: '#fff',
              },
            }}
            disabled={typeSelect === ''} 
            variant="contained"
            onClick={ handleClick }
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Próximo
          </Button>
        </Box>
      </Box>
      </PaperContainer>
      <Copyright />
    </>
  )
}
