import Copyright from "@/components/Copyright";
import PaperContainer from "@/components/PaperContainer";
import HealthCare from "@/components/forms/HealthCare";
import StepperCO from "@/components/StepperCO";
import Navbar from "@/components/Navbar";
import NextBackButton from "@/components/NextBackButton";
import { useRouter } from 'next/router';

const Pagamento = () => {
  const router = useRouter();

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
        <NextBackButton handleBack={ handleBack } handleClick={ handleClick }/>
      </PaperContainer>
      <Copyright />
    </>
  );
  
}

export default Pagamento;