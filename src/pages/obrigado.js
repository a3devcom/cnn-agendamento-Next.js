import Success from "@/components/forms/Success";
import PaperContainer from "@/components/PaperContainer";
import Navbar from "@/components/Navbar";
import Copyright from "@/components/Copyright";
import NextBackButton from "@/components/NextBackButton";
import { useRouter } from 'next/router';

const Obrigado = () => {
  return(
    <>
      <Navbar />
      <PaperContainer>
        <Success />
      </PaperContainer>
      <Copyright />
    </>
  );
};

export default Obrigado;