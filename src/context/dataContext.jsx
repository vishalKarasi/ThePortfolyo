import { createContext, useContext } from "react";
import { useFetch } from "../hooks/useFetch";

const DataContext = createContext();

const dataUrl =
  "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";

export const DataProvider = ({ children }) => {
  const { userData, status, error } = useFetch(dataUrl);

  return (
    <DataContext.Provider value={{ userData, status, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
