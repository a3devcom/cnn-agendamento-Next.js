import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { MenuItem } from '@mui/material';
import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import Context from '@/context';
import Loading from '../Loading'

export default function HealthCare() {
  const {convenios, setConvenios, setPagamento, convenio, setConvenio} = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const getInsurance = async () => {
      const response = await axios.get('/api/getInsurance');

      setConvenios(response.data);
    };

    getInsurance();
  }, []);
  
  useEffect(() => {
    setIsLoading(false);
  }, [convenios]);

  const handleClick = () => {
    setPagamento('Particular');
    setConvenio(33934);
  };

  const handleChange = ({ target }) => {
    const { value } = target;

    setPagamento(value);
    setConvenio(value);
  };
  
  return (
    <div>
      { isLoading ? <Loading /> : (
        <Box sx={{ 
          height: '75%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign: 'center', 
          flexDirection: 'column' 
        }}>
          <Typography variant="h4" gutterBottom className='mt-5' sx={{ fontWeight: 'bold'}}>
            Particular ou convênio?
          </Typography>
          <Typography variant="h6" gutterBottom className='mt-5'>
            Selecione uma opção para continuar.
          </Typography>
          <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
            <Grid item xs={12} md="auto" justifyContent="center" alignItems="center">
              <div onClick={ handleClick } className='mt-10 p-5 flex flex-row items-center w-52 border-2 solid rounded-lg hover:border-main-400 focus:border-main-400'>
                <AccountBalanceWalletIcon fontSize="large" color="primary" />
                <button className='flex flex-col pl-2 justify-center'>
                  <Typography variant="body1" sx={{ fontWeight: 'bold'}}>
                    Particular
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'light'}}>
                    Com pagamento no local
                  </Typography>
                </button>
              </div>
            </Grid>
            <Grid item xs={12} md="auto">
              <p className='flex flex-row justify-center mt-2 font-bold'>ou</p>
            </Grid>
            <Grid item xs={12} md="auto">
              <Stack spacing={2} sx={{ width: 300 }}>
                <TextField
                  select 
                  onChange={ handleChange }
                  value={convenio}
                >
                  {convenios.map((convenio) => (
                  <MenuItem value={convenio.id} key={convenio.id}>{convenio.nome}</MenuItem>
                  ))}
                </TextField>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}
