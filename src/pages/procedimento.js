import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useContext, useEffect } from 'react';
import Context from '../context';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const ProcedureSelection = () => {
  const { procedureSelect, setProcedureSelect, typeSelect } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (typeSelect === '') {
      router.push('/');
    }
  }, []);

  const handleClick = () => {
    router.push('/data');
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setProcedureSelect(value);
  };

  const cirurgias = ['Blefaroplastia', 'Simblefaro', 'Retirada de Verrugas'];
  const exames = ['Mapeamento de retina', 'Biometria ultrassônica'];

  return (
    <Box 
      className="flex flex-col items-center justify-center h-screen"
    >
      <Box
        className="flex flex-col w-3/4"
      >
      <h1 className='text-h5 mb-10'>Qual procedimento você deseja?</h1>
      <TextField
          className="w-full"
          id="outlined-select-currency"
          select
          value={procedureSelect}
          label='Insira o procedimento desejado'
          onChange={handleChange}
        >
          { typeSelect === 'Cirurgia' && cirurgias.map((cirurgia) => <MenuItem key={cirurgia} value={cirurgia}>{cirurgia}</MenuItem>)}
          { typeSelect === 'Exame' && exames.map((exame) => <MenuItem key={exame} value={exame}>{exame}</MenuItem>)}      
          
        </TextField>
        <Button 
          sx={{
            marginTop: '2rem',
            width: '100%',
          }}
          disabled={procedureSelect === ''} 
          variant="contained"
          onClick={ handleClick}
        >
          Continuar
        </Button>
      </Box>

    </Box>
  )
};

export default ProcedureSelection;