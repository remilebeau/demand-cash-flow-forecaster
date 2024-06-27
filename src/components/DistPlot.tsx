import Plot from "react-plotly.js";
type Props = {
  distValues: number[];
  distMin: number;
  distMode: number;
  distMax: number;
};

export default async function DistPlot({
  distValues,
  distMin,
  distMode,
  distMax,
}: Props) {
  return (
    <Plot
      data={[
        {
          x: distValues,
          type: "histogram",
        },
      ]}
      layout={{
        autosize: true,
        title: `Demand / Cash Flow per Period<br>Min: ${distMin.toLocaleString("en-US")}; Mode: ${distMode.toLocaleString("en-US")}<br>Max: ${distMax.toLocaleString("en-US")}`,
        plot_bgcolor: "white",
        paper_bgcolor: "white",
        font: {
          color: "black",
        },
      }}
    />
  );
}
