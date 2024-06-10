"use client";
import { createContext, useContext, useState } from "react";

type StateType = {
  distMin: number;
  distMode: number;
  distMax: number;
};

const DataContext = createContext<StateType | null>(null);
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [distMin, setDistMin] = useState(0);
  const [distMode, setDistMode] = useState(0);
  const [distMax, setDistMax] = useState(0);
  return (
    <DataContext.Provider value={{ distMin, distMode, distMax }}>
      {children}
    </DataContext.Provider>
  );
};
