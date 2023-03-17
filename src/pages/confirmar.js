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
  const { CPF, nome, sobrenome, email, tel, sexo, birthdate } = useContext(Context);
  const [idPatient, setIdPatient] = useState();

  const handleClick = async () => {
    
    
    const response = await axios.get(`/api/getPatient?cpf=${CPF}`);

    const { data } = response;
    
    if(data === '') {
      console.log(response);
      const newPatientId = await axios.get(`/api/postNewPatient?email=${email}&telefone=${tel}&cpf=${CPF}&dataNasc=${dayjs(birthdate).format('YYYY-MM-DD')}&genero=${sexo}&nome=${nome + sobrenome}`);

      console.log(newPatientId.data.id);
      setIdPatient(newPatientId.data.id);
    } else {
      console.log(data.id);
      setIdPatient(data.id);
    }
    
    

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

