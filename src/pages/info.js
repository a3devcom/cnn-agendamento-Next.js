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

const Info = () => {
  const { nome, sobrenome, birthdate, email, CPF, tel, sexo, isDisabled, setIsDisabled, setBirthdate } = useContext(Context);

  useEffect(() => {
    const nameRegex = /^[A-Za-z]+$/;
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

  const handleClick = () => {
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
        <StepperCO  currentStep={4}/>
        <PersonalInfo />
        <NextBackButton disabled={ isDisabled } handleClick={ handleClick} handleBack={ handleBack }/>
      </PaperContainer>
      <Copyright />
    </div>
  );
};

export default Info;