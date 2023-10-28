import React, { createContext, useContext } from "react";
import { ContextType, ContextDefultValues } from "./ContextTypes";

const Context = createContext<ContextType>(ContextDefultValues);

export const useMyContext = () => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    throw new Error('useMyContext deve ser usado dentro de um MyContextProvider');
  }

  return contextValue;
};

export default Context;
