import Head from 'next/head';
import Copyright from '@/components/Copyright';
import PersonalInfo from '@/components/forms/PersonalInfo';
import PaperContainer from '../components/PaperContainer'
import StepperCO from '@/components/StepperCO';
import { useRouter } from 'next/router';
import NextBackButton from '@/components/NextBackButton';
import Navbar from '@/components/Navbar';
import { useContext, useEffect } from 'react';
import Context from '@/context';
import axios from 'axios';

const Info = () => {
  const { nome, sobrenome, birthdate, email, CPF, tel, sexo, isDisabled, setIsDisabled, setBirthdate, setIdPatient } = useContext(Context);

  useEffect(() => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const cpfRegex = /^\d{11}$/;
    const telRegex = /^\d{10}$|^\d{11}$|^(\d{2})\s?(\d{4,5})-?(\d{4})$/;
    const isValidNome = nameRegex.test(nome);
    const isValidSobrenome = nameRegex.test(sobrenome);
    const isValidBirthdate = birthdate && parseInt(birthdate.split('-')[0]) < new Date().getFullYear() && parseInt(birthdate.split('-')[0]) > new Date().getFullYear() - 125;
    const isValidEmail = emailRegex.test(email);
    const isValidCPF = cpfRegex.test(CPF);
    const isValidTel = telRegex.test(tel);
    const isValidSexo = Boolean(sexo);

    const isAllValid = isValidNome && isValidSobrenome && isValidBirthdate && isValidEmail && isValidTel && isValidSexo && isValidCPF;

    setIsDisabled(!isAllValid);

  }, [nome, sobrenome, birthdate, email, CPF, tel, sexo]);
  
  const router = useRouter();

  const setPatientId = async () => {
    const response = await axios.get(`/api/getPatient?cpf=${CPF}`);

    const { data } = response;
    
    if(data === '') {
      const newPatientId = await axios.get(`/api/postNewPatient?email=${email}&telefone=${tel}&cpf=${CPF}&dataNasc=${dayjs(birthdate).format('YYYY-MM-DD')}&genero=${sexo}&nome=${nome + sobrenome}`);

      setIdPatient(newPatientId.data.id);
      console.log(`Novo paciente criado com id: ${newPatientId.data.id}`)
    } else {
      setIdPatient(data.id);
      console.log(`Paciente existente encontrado com id: ${data.id}`)
    }
  };

  const handleClick = async () => {
    await setPatientId();

    router.push('/pagamento');
  }

  const handleBack = () => {
    router.push('/horarios');
  };


  return (
    <div>
      <Head>
        <title>Clínica Frei Galvão</title>
      </Head>
      <Navbar />
      <PaperContainer>
        <StepperCO  currentStep={2}/>
        <PersonalInfo />
        <NextBackButton disabled={ isDisabled } handleClick={ handleClick} handleBack={ handleBack }/>
      </PaperContainer>
      <Copyright />
    </div>
  );
};

export default Info;