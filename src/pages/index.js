import Head from 'next/head'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import Context from '@/context';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export default function TypeSelection() {
  const { typeSelect, setTypeSelect } = useContext(Context);
  const router = useRouter();

  const handleChange = ({ target }) => {
    const { value } = target;
    setTypeSelect(value);
  };

  const handleClick = () => {
    if (typeSelect === 'Consulta') {
      router.push('/data');
    } else {
      router.push('/procedimento');
    }
  };

  return (
    <>
      <Box 
      className="flex flex-col items-center justify-center h-screen"
    >
        <Box
          className="flex flex-col w-3/4"
        >
        <h1 className='text-h5 mb-10'>Qual tipo você deseja?</h1>
        <TextField
            className="w-full"
            id="outlined-select-currency"
            select
            value={typeSelect}
            label='Insira o procedimento desejado'
            onChange={ handleChange }
          >
            <MenuItem value='Consulta'>Consulta</MenuItem>
            <MenuItem value='Cirurgia'>Cirurgia</MenuItem>
            <MenuItem value='Exame'>Exame</MenuItem>
          </TextField>
          <Button 
            sx={{
              marginTop: '2rem',
              width: '100%',
            }}
            disabled={typeSelect === ''} 
            variant="contained"
            onClick={ handleClick }
          >
            Continuar
          </Button>
        </Box>

      </Box>
    </>
  )
}
