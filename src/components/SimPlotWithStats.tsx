import Plot from "react-plotly.js";

type Props = {
  simValues: number[];
  simMin: number;
  simMax: number;
  simMean: number;
  simQ1: number;
  simQ2: number;
  simQ3: number;
  lowerCI: number;
  upperCI: number;
  distMin: number;
  distMode: number;
  distMax: number;
  simPeriodsPerYear: number;
};

export default async function SimPlotWithStats({
  simValues,
  simMin,
  simMax,
  simMean,
  simQ1,
  simQ2,
  simQ3,
  lowerCI,
  upperCI,
  distMin,
  distMode,
  distMax,
  simPeriodsPerYear,
}: Props) {
  return (
    <>
      <Plot
        data={[
          {
            x: simValues,
            type: "histogram",
          },
        ]}
        layout={{
          autosize: true,
          title: `Forecasted Annual Demand / Cash Flow<br>Min: ${distMin}, Mode: ${distMode},<br>Max: ${distMax}, Periods per Year: ${simPeriodsPerYear}`,
          plot_bgcolor: "white",
          paper_bgcolor: "white",
          font: { color: "black" },
        }}
      />
      {/* simulation stats */}
      <article className="flex w-full flex-col rounded-md border p-2">
        <h2 className="text-center">Simulation Statistics</h2>
        <section id="min" className="flex flex-row justify-between">
          <p>Minimum:</p>
          <p>{simMin}</p>
        </section>
        <section id="25p" className="flex flex-row justify-between">
          <p>25th Percentile:</p>
          <p>{simQ1}</p>
        </section>
        <section id="mean" className="flex flex-row justify-between">
          <p>Mean:</p>
          <p>{simMean}</p>
        </section>
        <section id="ci" className="flex flex-row justify-between text-right">
          <p className="text-left">95% Confidence Interval for Mean:</p>
          <p>
            [{lowerCI}, {upperCI}]
          </p>
        </section>
        <section id="50p" className="flex flex-row justify-between">
          <p>Median:</p>
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
    </>
  );
}
