import Head from 'next/head';
import Copyright from '@/components/Copyright';
import PersonalInfo from '@/components/forms/PersonalInfo';
import PaperContainer from '../components/PaperContainer'
import StepperCO from '@/components/StepperCO';
import { useRouter } from 'next/router';
import NextBackButton from '@/components/NextBackButton';
import Navbar from '@/components/Navbar';

const Info = () => {
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
        <NextBackButton handleClick={ handleClick} handleBack={ handleBack }/>
      </PaperContainer>
      <Copyright />
    </div>
  );
};

export default Info;