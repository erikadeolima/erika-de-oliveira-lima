import { useContext } from "react";
import Context from "./Context";


export const useMyContext = () => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    throw new Error('useMyContext deve ser usado dentro de um MyContextProvider');
  }

  return contextValue;
};