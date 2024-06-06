"use client";
import { useDataContext } from "../context/DataContext";
import Plot from "react-plotly.js";
export default function SimPlot() {
  const { distMin, distMode, distMax, simDaysPerMonth, simValues } =
    useDataContext();
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
