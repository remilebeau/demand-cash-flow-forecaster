"use client";
import Plot from "react-plotly.js";

type Props = {
  distMin: string;
  distMode: string;
  distMax: string;
  simDaysPerMonth: string;
  simValues: number[];
};
export default function SimPlot({
  distMin,
  distMode,
  distMax,
  simDaysPerMonth,
  simValues,
}: Props) {
  return (
    <Plot
      className="bg-black"
      data={[
        {
          x: simValues,
          type: "histogram",
        },
      ]}
      layout={{
        width: 600,
        height: 600,
        title: `Simulated Annual Cash Flow<br>Daily Min: $${distMin}, Daily Mode: $${distMode},<br>Daily Max: $${distMax}, Days Per Month: ${simDaysPerMonth}`,
        xaxis: { title: "Annual Cash Flow" },
        yaxis: { title: "Frequency" },
        plot_bgcolor: "black",
        paper_bgcolor: "black",
        font: { color: "white" },
      }}
    />
  );
}
