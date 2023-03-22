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
  const { CPF, nome, sobrenome, email, tel, sexo, birthdate, selectedDate, chosenProfessional, appointmentTime, convenio, idPatient, idHealthCare, endTime } = useContext(Context);  

  const checkDisponibility = async () => {
    const response = await axios.get(`/api/getDisponibility/?id=${chosenProfessional.id}&date=${dayjs(selectedDate).format('YYYY-MM-DD')}`);

    const isAvailable = response.data.some((horario) => appointmentTime === horario.horaInicio);

    if (!isAvailable) {
      router.push('/horarios');
    }
  };

  const completeAppointment = async () => {
    let localAgenda = 0;

    if(chosenProfessional.id === 44017) {
      localAgenda = 25355;
    } else if(chosenProfessional.id === 43997) {
      localAgenda = 25361
    } else {
      localAgenda = 27754
    }

    const response = await axios.post(`/api/postNewAppointment?data=${dayjs(selectedDate).format('YYYY-MM-DD')}&emailPaciente=${email}&horaFim=${endTime}&horaInicio=${appointmentTime}&idLocalAgenda=${localAgenda}&idPaciente=${idPatient}&idPacienteConvenio=${idHealthCare}&idPessoaExecutor=${chosenProfessional.idPessoa}&telefoneCelularPaciente=${tel}`);

    console.log(response.data);
  };

  const handleClick = async () => {   
    
    await checkDisponibility();
    await completeAppointment();

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

