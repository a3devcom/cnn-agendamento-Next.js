import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export default function PersonalInfo() {
  const [gender, setGender] = useState('female');
  
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  
  return (
    <React.Fragment>
      <Typography
      variant="h6" 
      gutterBottom
      className='mt-5 font-bold'
      >
        Adicione suas informações pessoais, para agendarmos a consulta:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nome"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Sobrenome"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Data de Nascimento*"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="E-mail"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="CPF*"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Telefone*"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">Sexo*</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={gender}
            onChange={handleGenderChange}
            row
          >
          <FormControlLabel value="male" control={<Radio />} label="Masculino" />
          <FormControlLabel value="female" control={<Radio />} label="Feminino" />
          <FormControlLabel value="other" control={<Radio />} label="Outro" />
          </RadioGroup>
        </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}