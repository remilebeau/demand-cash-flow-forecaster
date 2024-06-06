"use client";
import { createContext, useContext, useState } from "react";

type StateType = {
  distMin: number;
  distMode: number;
  distMax: number;
  distValues: number[];
  simDaysPerMonth: number;
  simValues: number[];
  simMean: number;
  simStd: number;
  simLowerCI: number;
  simUpperCI: number;
  errMsg: string;
  isLoading: boolean;
  setDistMin: (distMin: number) => void;
  setDistMode: (distMode: number) => void;
  setDistMax: (distMax: number) => void;
  setDistValues: (distValues: number[]) => void;
  setSimDaysPerMonth: (simDaysPerMonth: number) => void;
  setSimValues: (simValues: number[]) => void;
  setSimMean: (simMean: number) => void;
  setSimStd: (simStd: number) => void;
  setSimLowerCI: (simLowerCI: number) => void;
  setSimUpperCI: (simUpperCI: number) => void;
  setErrMsg: (errMsg: string) => void;
  setIsLoading: (isLoading: boolean) => void;
};

const initState: StateType = {
  distMin: 0,
  distMode: 0,
  distMax: 0,
  distValues: [],
  simDaysPerMonth: 0,
  simValues: [],
  simMean: 0,
  simStd: 0,
  simLowerCI: 0,
  simUpperCI: 0,
  errMsg: "",
  isLoading: false,
  setDistMin: () => {},
  setDistMode: () => {},
  setDistMax: () => {},
  setDistValues: () => {},
  setSimDaysPerMonth: () => {},
  setSimValues: () => {},
  setSimMean: () => {},
  setSimStd: () => {},
  setSimLowerCI: () => {},
  setSimUpperCI: () => {},
  setErrMsg: () => {},
  setIsLoading: () => {},
};

const DataContext = createContext<StateType>(initState);

export function DataWrapper({ children }: { children: React.ReactNode }) {
  const [distMin, setDistMin] = useState<number>(0);
  const [distMode, setDistMode] = useState<number>(0);
  const [distMax, setDistMax] = useState<number>(0);
  const [distValues, setDistValues] = useState<number[]>([]);
  const [simDaysPerMonth, setSimDaysPerMonth] = useState<number>(0);
  const [simValues, setSimValues] = useState<number[]>([]);
  const [simMean, setSimMean] = useState<number>(0);
  const [simStd, setSimStd] = useState<number>(0);
  const [simLowerCI, setSimLowerCI] = useState<number>(0);
  const [simUpperCI, setSimUpperCI] = useState<number>(0);
  const [errMsg, setErrMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <DataContext.Provider
      value={{
        distMin,
        distMode,
        distMax,
        distValues,
        simDaysPerMonth,
        simValues,
        simMean,
        simStd,
        simLowerCI,
        simUpperCI,
        setDistValues,
        setSimValues,
        setSimMean,
        setSimStd,
        setSimLowerCI,
        setSimUpperCI,
        setDistMin,
        setDistMode,
        setDistMax,
        setSimDaysPerMonth,
        errMsg,
        isLoading,
        setErrMsg,
        setIsLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const ctx = useContext(DataContext);
  if (!ctx) {
    throw new Error("useDataContext must be used within a DataWrapper");
  }
  return useContext(DataContext);
}
