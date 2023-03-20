import Review from "@/components/forms/Review";
import PaperContainer from "@/components/PaperContainer";
import Navbar from "@/components/Navbar";
import Copyright from "@/components/Copyright";
import NextBackButton from "@/components/NextBackButton";
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from "axios";
import { useContext, useState } from "react";
import Context from "@/context";
import dayjs from "dayjs";

const Confirmar = () => {
  const router = useRouter();
  const { CPF, nome, sobrenome, email, tel, sexo, birthdate, selectedDate, chosenProfessional, appointmentTime } = useContext(Context);
  const [idPatient, setIdPatient] = useState();

  const setPatientId = async () => {
    const response = await axios.get(`/api/getPatient?cpf=${CPF}`);

    const { data } = response;
    
    if(data === '') {
      const newPatientId = await axios.get(`/api/postNewPatient?email=${email}&telefone=${tel}&cpf=${CPF}&dataNasc=${dayjs(birthdate).format('YYYY-MM-DD')}&genero=${sexo}&nome=${nome + sobrenome}`);

      setIdPatient(newPatientId.data.id);
    } else {
      setIdPatient(data.id);
    }
  };

  const checkDisponibility = async () => {
    const response = await axios.get(`/api/getDisponibility/?id=${chosenProfessional.id}&date=${dayjs(selectedDate).format('YYYY-MM-DD')}`);

    const isAvailable = response.data.some((horario) => appointmentTime === horario.horaInicio);

    if (!isAvailable) {
      router.push('/horarios');
    }
  };

  const handleClick = async () => {   
    
    await setPatientId();
    await checkDisponibility();
    
    

    router.push('/obrigado');
  };

  const handleBack = () => {
    router.push('/pagamento');
  };

  return (
    <>
      <Head>
        <title>Clínica Frei Galvão</title>
      </Head>
      <Navbar />
      <PaperContainer>
        <Review />
        <NextBackButton handleBack={ handleBack } handleClick={ handleClick } isConcludeButton={ true }/>
      </PaperContainer>
      <Copyright />
    </>
  );
};

export default Confirmar;

