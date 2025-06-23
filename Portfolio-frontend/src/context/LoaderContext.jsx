import { createContext, useContext } from "react";
import { useDynamicLoader } from "../hooks/useDynamicLoader";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const { startLoader, stopLoader } = useDynamicLoader();

  return (
    <LoaderContext.Provider value={{ startLoader, stopLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);