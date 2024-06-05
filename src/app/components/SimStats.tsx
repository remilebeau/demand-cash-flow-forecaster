import { useDataContext } from "../context/DataContext";
export default function SimStats() {
  const { simMean, simStd, simLowerCI, simUpperCI } = useDataContext();
  return (
    <section className="flex flex-col">
      <p>Mean: {simMean}</p>
      <p>Standard Deviation: {simStd}</p>
      <p>
        95% Confidence Interval: {simLowerCI} to {simUpperCI}
      </p>
    </section>
  );
}
