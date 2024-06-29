import Plot from "react-plotly.js";

type Props = {
  simValues: number[];
  distMin: number;
  distMode: number;
  distMax: number;
  simPeriodsPerYear: number;
};

export default async function SimPlot({
  simValues,
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
          title: `Forecasted Annual Demand / Cash Flow<br>Min: ${distMin.toLocaleString("en-US")}; Mode: ${distMode.toLocaleString("en-US")};<br>Max: ${distMax.toLocaleString("en-US")}; Periods per Year: ${simPeriodsPerYear.toLocaleString("en-US")}`,
          plot_bgcolor: "white",
          paper_bgcolor: "white",
          font: { color: "black" },
        }}
      />
    </>
  );
}
