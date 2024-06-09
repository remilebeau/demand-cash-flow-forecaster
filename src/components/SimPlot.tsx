import { useDataContext } from "@/context/DataContext";
import Plot from "react-plotly.js";

export default function SimPlot() {
  const { simValues } = useDataContext();
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
        title: "Simulated Values",
        xaxis: { title: "Annual Cash Flow" },
        yaxis: { title: "Frequency" },
        plot_bgcolor: "black",
        paper_bgcolor: "black",
        font: { color: "white" },
      }}
    />
  );
}
