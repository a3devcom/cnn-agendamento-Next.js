import Review from "@/components/forms/Review";
import PaperContainer from "@/components/PaperContainer";
import Navbar from "@/components/Navbar";
import Copyright from "@/components/Copyright";
import NextBackButton from "@/components/NextBackButton";
import { useRouter } from 'next/router';

const Confirmar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/obrigado');
  };

  const handleBack = () => {
    router.push('/pagamento');
  };

  return (
    <>
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

