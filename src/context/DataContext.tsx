"use client";
import { createContext, useState, useContext } from "react";
type StateType = {
  simValues: number[];
  distValues: number[];
  setSimValues: (simValues: number[]) => void;
  setDistValues: (distValues: number[]) => void;
};

export const DataContext = createContext<StateType | undefined>(undefined);
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContext");
  }
  return context;
};

export const DataWrapper = ({ children }: { children: React.ReactNode }) => {
  const [simValues, setSimValues] = useState<number[]>([]);
  const [distValues, setDistValues] = useState<number[]>([]);
  return (
    <DataContext.Provider
      value={{
        simValues,
        distValues,
        setSimValues,
        setDistValues,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
