import Context from ".";
import { useState } from "react";

const ContextProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [professionals, setProfessionals] = useState([]);
  const [disponibility, setDisponibility] = useState([]);
  const [appointmentTime, setAppointmentTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [chosenProfessional, setChosenProfessional] = useState(null);
  // Estado do forms
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [birthdate, setBirthdate] = useState();
  const [email, setEmail] = useState('');
  const [CPF, setCPF] = useState('');
  const [tel, setTel] = useState('');
  const [sexo, setSexo] = useState('');
  const [ isDisabled, setIsDisabled ] = useState(true);
  const [idPatient, setIdPatient] = useState();
  // Estado do healthcare
  const [convenios, setConvenios] = useState([]);
  const [pagamento, setPagamento] = useState('');
  const [convenio, setConvenio] = useState('');
  const [idHealthCare, setIdHealthCare] = useState();
  // Estado da confirmação
  const [nomeConvenio, setNomeConvenio] = useState('');

  const contextValue = {
    selectedDate,
    setSelectedDate,
    setProfessionals,
    professionals,
    disponibility, 
    setDisponibility, 
    appointmentTime, 
    setAppointmentTime, 
    chosenProfessional, 
    setChosenProfessional,
    nome,
    sobrenome,
    birthdate,
    email,
    CPF,
    tel,
    sexo,
    setNome,
    setSobrenome,
    setBirthdate,
    setEmail,
    setCPF,
    setTel,
    setSexo,
    isDisabled, 
    setIsDisabled, 
    convenios, 
    setConvenios,
    pagamento,
    setPagamento,
    convenio,
    setConvenio,
    setNomeConvenio,
    nomeConvenio,
    idPatient,
    setIdPatient,
    idHealthCare,
    setIdHealthCare,
    endTime, 
    setEndTime
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;