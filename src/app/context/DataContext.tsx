"use client";
import { createContext, useContext, useState } from "react";
import getDistValues from "../../../lib/getDistValues";
import getSimValues from "../../../lib/getSimValues";

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
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
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
  handleSubmit: async (e: React.FormEvent<HTMLFormElement>) => {},
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrMsg("");
    if (!distMin || !distMode || !distMax || !simDaysPerMonth) {
      setErrMsg("All fields are required");
      setIsLoading(false);
      return;
    }
    if (distMode < distMin || distMode > distMax) {
      setErrMsg("Expected value must be between minimum and maximum");
      setIsLoading(false);
      return;
    }
    const distValues = await getDistValues(distMin, distMode, distMax);
    setDistValues(distValues);
    const simRes = await getSimValues(
      distMin,
      distMode,
      distMax,
      simDaysPerMonth
    );
    setSimValues(simRes.simValues);
    setSimMean(simRes.simMean);
    setSimStd(simRes.simStd);
    setSimLowerCI(simRes.simLowerCI);
    setSimUpperCI(simRes.simUpperCI);
    setErrMsg("");
    setIsLoading(false);
  };
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
        handleSubmit,
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
  return useContext(DataContext);
}
