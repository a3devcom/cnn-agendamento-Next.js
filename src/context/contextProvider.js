import Context from ".";
import { useState } from "react";

const ContextProvider = ({ children }) => {
  const [typeSelect, setTypeSelect] = useState('');
  const [procedureSelect, setProcedureSelect] = useState('');

  const contextValue = {
    typeSelect, 
    setTypeSelect,
    procedureSelect,
    setProcedureSelect
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;