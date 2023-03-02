import Context from ".";
import { useState } from "react";

const ContextProvider = ({ children }) => {
  const [typeSelect, setTypeSelect] = useState('');
  const [procedureSelect, setProcedureSelect] = useState('');
  const [selectedDate, setSelectedDate] = useState();
  const [professionals, setProfessionals] = useState([]);
  const [disponibility, setDisponibility] = useState([]);
  const [appointmentTime, setAppointmentTime] = useState('');

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
    setAppointmentTime
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;