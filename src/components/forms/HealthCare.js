import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete'

export default function HealthCare() {
  const healtcarePlans = [
    { title: 'Bradesco Saúde' },
    { title: 'Amil' },
    { title: 'Intermédica' },
    { title: 'Porto Seguro' },
    { title: 'NotreDame' },
    { title: "Sul América" },
  ];
  return (
    <Box sx={{ height: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box>
        <Typography variant="h4" gutterBottom className='mt-5' sx={{ fontWeight: 'bold'}}>
          Particular ou convênio?
        </Typography>
        <Typography variant="h6" gutterBottom className='mt-5'>
          Selecione uma opção para continuar.
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid>
            <button className='mt-10 p-5 flex flex-row items-center w-52 border-2 solid rounded-lg'>
              <AccountBalanceWalletIcon fontSize="large" color="primary" />
              <div className='flex flex-col pl-2 justify-center'>
                <Typography variant="body1" sx={{ fontWeight: 'bold'}}>
                  Particular
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'light'}}>
                  Com pagamento no local
                </Typography>
              </div>
            </button>
            <p className='flex flex-row justify-center mt-2'>ou</p>
            <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={healtcarePlans.map((option) => option.title)}
              renderInput={(params) => (
              <TextField
              {...params}
              label="Digite o nome do seu convênio"
              InputProps={{
              ...params.InputProps,
              type: 'search',
              }}
              className='mt-5'
            />
            )}
          />
    </Stack>
            </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
