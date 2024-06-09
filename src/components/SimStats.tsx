"use client";
import { useState, useEffect } from "react";
import getSimStats from "@/lib/getSimStats";
import { useDataContext } from "@/context/DataContext";

export default function SimStats() {
  const { simValues } = useDataContext();
  const [simMean, setSimMean] = useState(0);
  const [simQ1, setSimQ1] = useState(0);
  const [simQ2, setSimQ2] = useState(0);
  const [simQ3, setSimQ3] = useState(0);
  const [lowerCI, setLowerCI] = useState(0);
  const [upperCI, setUpperCI] = useState(0);
  useEffect(() => {
    getSimStats(simValues).then((data) => {
      setSimMean(data.simMean);
      setSimQ1(data.simQ1);
      setSimQ2(data.simQ2);
      setSimQ3(data.simQ3);
      setLowerCI(data.lowerCI);
      setUpperCI(data.upperCI);
    });
  }, [simValues]);
  return (
    <section className="flex flex-col border rounded-md p-2">
      <p>Mean: {simMean}</p>
      <p>
        95% Confidence Interval: {lowerCI} to {upperCI}
      </p>
      <p>25th Percentile: {simQ1}</p>
      <p>50th Percentile: {simQ2}</p>
      <p>75th Percentile: {simQ3}</p>
    </section>
  );
}
