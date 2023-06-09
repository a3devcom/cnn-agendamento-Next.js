import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useContext, useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Context from '@/context';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

export default function PersonalInfo() {
  const { nome, setNome, sobrenome, setSobrenome, birthdate, setBirthdate, email, setEmail, CPF, setCPF, tel, setTel, sexo, setSexo} = useContext(Context);

  const yesterday = dayjs().subtract(18, 'year');

  const [isNomeValid, setIsNomeValid] = useState(false);
  const [isSobrenomeValid, setIsSobrenomeValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isCPFValid, setIsCPFValid] = useState(false);
  const [isTelValid, setIsTelValid] = useState(false);
  const [isSexoValid, setIsSexoValid] = useState(true);

  const handleChange = ({ target }) => {
    const { id, value } = target;

    switch (id) {
      case 'nome':
          setNome(value);
        break;
      case 'sobrenome':
          setSobrenome(value);    
      break;  
      case 'birthdate':
          setBirthdate(value);
        break;
      case 'email':
          setEmail(value);
      break;
      case 'CPF':
          setCPF(value);
      break;
      case 'tel':
          setTel(value);          
        break;
      default:
        setSexo(value);        
      break;
    }
  }

  useEffect(() => {
    const nameRegex = /^[A-Za-z\s]+$/;

    const isValidNome = nameRegex.test(nome);

    setIsNomeValid(isValidNome);
  }, [nome]);

  useEffect(() => {
    const nameRegex = /^[A-Za-z\s]+$/;

    const isValidSobrenome = nameRegex.test(sobrenome);

    setIsSobrenomeValid(isValidSobrenome);
  }, [sobrenome]);

  useEffect(() => {
    const emailRegex = /^\S+@\S+\.\S+$/;

    const isValidEmail = emailRegex.test(email);

    setIsEmailValid(isValidEmail);
  }, [email]);

  useEffect(() => {
    const cpfRegex = /^\d{11}$/;

    const isValidCPF = cpfRegex.test(CPF);

    setIsCPFValid(!isValidCPF);
  }, [CPF]);

  useEffect(() => {
    const telRegex = /^\d{10}$|^\d{11}$|^(\d{2})\s?(\d{4,5})-?(\d{4})$/;

    const isValidTel = telRegex.test(tel);

    setIsTelValid(isValidTel);
  }, [tel]);

  useEffect(() => {
    const isValidSexo = sexo !== '';

    setIsSexoValid(isValidSexo);
  }, [sexo]);
  
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
            id="nome"
            name="firstName"
            onChange={ handleChange }
            label="Nome"
            value={ nome } 
            fullWidth
            autoComplete="given-name"
            variant="standard"
            error={!isNomeValid}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sobrenome"
            name="lastName"
            label="Sobrenome"
            onChange={ handleChange }
            value={ sobrenome } 
            fullWidth
            autoComplete="family-name"
            variant="standard"
            error={!isSobrenomeValid}
          />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            value={birthdate}
            onChange={(date) => setBirthdate(dayjs(date).format('YYYY-MM-DD'))}
            label="Data de Nascimento"
            renderInput={(params) => <TextField {...params} fullWidth/>}
            disableFuture
            maxDate={yesterday}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="E-mail"
            onChange={ handleChange }
            fullWidth
            value={ email } 
            autoComplete="email"
            variant="standard"
            error={!isEmailValid}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="CPF"
            id="CPF"
            value={ CPF }
            onChange={ handleChange } 
            fullWidth
            variant="standard"
            error={isCPFValid}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="tel"
            name="tel"
            value={ tel } 
            label="Telefone"
            onChange={ handleChange }
            fullWidth
            autoComplete="tel"
            variant="standard"
            error={!isTelValid}
          />
        </Grid>
        <Grid item xs={12}>
        <FormControl component="fieldset" fullWidth>
          <FormLabel error={!isSexoValid} component="legend">Sexo*</FormLabel>
          <RadioGroup
            required
            id="sexo"
            aria-label="gender"
            name="gender"
            value={ sexo }
            onChange={ handleChange } 
            row
            
          >
          <FormControlLabel value="MASCULINO" control={<Radio />} label="Masculino" />
          <FormControlLabel value="FEMININO" control={<Radio />} label="Feminino" />
          </RadioGroup>
        </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}