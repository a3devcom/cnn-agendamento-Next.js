import Success from "@/components/forms/Success";
import PaperContainer from "@/components/PaperContainer";
import Navbar from "@/components/Navbar";
import Copyright from "@/components/Copyright";
import Head  from "next/head";

const Obrigado = () => {
  return(
    <>
      <Head>
        <title>Clínica Frei Galvão</title>
      </Head>
      <Navbar />
      <PaperContainer>
        <Success />
      </PaperContainer>
      <Copyright />
    </>
  );
};

export default Obrigado;