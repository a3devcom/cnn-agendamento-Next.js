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
  const { pagamento, convenio, selectedDate, appointmentTime, procedureSelect } = useContext(Context);

  useEffect(() => {
    if(pagamento !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [pagamento]);

  useEffect(() => {
    const isConvenioValid = async () => {
      const response = await axios.get(`/api/getPrice?data=${dayjs(selectedDate).format('YYYY-MM-DD')}&hora=${appointmentTime}&idConvenio=${convenio}&idProcedimento=${procedureSelect}`);

      console.log(response.data);
    };

    if(pagamento !== 'Particular' && pagamento !== '') {
      isConvenioValid();
    }
  }, [convenio]);

  const handleClick = () => {
    router.push('/confirmar');
  }

  const handleBack = () => {
    router.push('/info');
  }

  return(
    <>
      <Navbar />
      <PaperContainer>
        <StepperCO currentStep={4}/>
        <HealthCare />
        <NextBackButton disabled={isDisabled} handleBack={ handleBack } handleClick={ handleClick }/>
      </PaperContainer>
      <Copyright />
    </>
  );
  
}

export default Pagamento;