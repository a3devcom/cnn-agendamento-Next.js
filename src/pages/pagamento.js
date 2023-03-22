import Copyright from "@/components/Copyright";
import PaperContainer from "@/components/PaperContainer";
import HealthCare from "@/components/forms/HealthCare";
import StepperCO from "@/components/StepperCO";
import Navbar from "@/components/Navbar";
import NextBackButton from "@/components/NextBackButton";
import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from "react";
import Context from "@/context";
import axios from "axios";
import dayjs from "dayjs";

const Pagamento = () => {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(true);
  const { pagamento, convenio, setIdHealthCare, idPatient } = useContext(Context);

  useEffect(() => {
    if(pagamento !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [pagamento]);

  const associatePatient = async () => {
    const response = await axios.post(`/api/postAssociatePatient?idPaciente=${idPatient}&idTipoConvenio=${convenio}`);

    if(!response.data.message) {
      console.log(`Associação criada, id salvo no estado: ${response.data}`)

      setIdHealthCare(response.data);
    } else {
      const response = await axios.get(`/api/getHealthCare?idPaciente=${idPatient}&idTipoConvenio=${convenio}`);

      console.log(`Associação ja existente, id salvo no estado: ${response.data}`)

      setIdHealthCare(response.data);
    }
  };

  const handleClick = async () => {

    await associatePatient();
    router.push('/confirmar');
  }

  const handleBack = () => {
    router.push('/info');
  }

  return(
    <>
      <Navbar />
      <PaperContainer>
        <StepperCO currentStep={2}/>
        <HealthCare />
        <NextBackButton disabled={isDisabled} handleBack={ handleBack } handleClick={ handleClick }/>
      </PaperContainer>
      <Copyright />
    </>
  );
  
}

export default Pagamento;