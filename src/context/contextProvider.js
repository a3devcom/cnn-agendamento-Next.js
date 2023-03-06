import Context from ".";
import { useState } from "react";

const ContextProvider = ({ children }) => {
  const [typeSelect, setTypeSelect] = useState('');
  const [procedureSelect, setProcedureSelect] = useState('');
  const [selectedDate, setSelectedDate] = useState();
  const [professionals, setProfessionals] = useState([]);
  const [disponibility, setDisponibility] = useState([]);
  const [appointmentTime, setAppointmentTime] = useState('');
  const [chosenProfessional, setChosenProfessional] = useState(null);
  // Estado do forms
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [birthdate, setBirthdate] = useState();
  const [email, setEmail] = useState('');
  const [CPF, setCPF] = useState('');
  const [tel, setTel] = useState('');
  const [sexo, setSexo] = useState('female');
  const [ isDisabled, setIsDisabled ] = useState(true);

  const contextValue = {
    typeSelect, 
    setTypeSelect,
    procedureSelect,
    setProcedureSelect,
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
    setIsDisabled
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;