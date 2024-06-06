"use client";

type Props = {
  simMean: number;
  simStd: number;
  simLowerCI: number;
  simUpperCI: number;
};
export default function SimStats({
  simMean,
  simStd,
  simLowerCI,
  simUpperCI,
}: Props) {
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
