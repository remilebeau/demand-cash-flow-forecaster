"use client";
import { useState, useEffect } from "react";
import getSimStats from "@/lib/getSimStats";

type Props = {
  simValues: number[];
};

export default function SimStats({ simValues }: Props) {
  const [simMin, setSimMin] = useState(0);
  const [simMax, setSimMax] = useState(0);
  const [simMean, setSimMean] = useState(0);
  const [simQ1, setSimQ1] = useState(0);
  const [simQ2, setSimQ2] = useState(0);
  const [simQ3, setSimQ3] = useState(0);
  const [lowerCI, setLowerCI] = useState(0);
  const [upperCI, setUpperCI] = useState(0);
  useEffect(() => {
    getSimStats(simValues).then((data) => {
      setSimMin(data.simMin);
      setSimMax(data.simMax);
      setSimMean(data.simMean);
      setSimQ1(data.simQ1);
      setSimQ2(data.simQ2);
      setSimQ3(data.simQ3);
      setLowerCI(data.lowerCI);
      setUpperCI(data.upperCI);
    });
  }, [simValues]);
  return (
    <article className="flex flex-col border rounded-md p-2 w-full">
      <h2 className="text-center">Simulation Statistics</h2>
      <section id="mean" className="flex flex-row justify-between">
        <p>Mean:</p>
        <p>{simMean}</p>
      </section>
      <section id="ci" className="flex flex-row text-right justify-between">
        <p className="text-left">95% Confidence Interval for Mean:</p>
        <p>
          [{lowerCI}, {upperCI}]
        </p>
      </section>
      <section id="min" className="flex flex-row justify-between">
        <p>Minimum:</p>
        <p>{simMin}</p>
      </section>
      <section id="25p" className="flex flex-row justify-between">
        <p>25th Percentile:</p>
        <p>{simQ1}</p>
      </section>
      <section id="50p" className="flex flex-row justify-between">
        <p>50th Percentile:</p>
        <p>{simQ2}</p>
      </section>
      <section id="75p" className="flex flex-row justify-between">
        <p>75th Percentile:</p>
        <p>{simQ3}</p>
      </section>
      <section id="max" className="flex flex-row justify-between">
        <p>Maximum:</p>
        <p>{simMax}</p>
      </section>
    </article>
  );
}
