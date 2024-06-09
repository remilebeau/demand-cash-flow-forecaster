import { useDataContext } from "@/context/DataContext";
import Plot from "react-plotly.js";

export default function DistPlot() {
  const { distValues } = useDataContext();
  return (
    <Plot
      className="bg-black"
      data={[
        {
          x: distValues,
          type: "histogram",
        },
      ]}
      layout={{
        width: 600,
        height: 600,
        title: "Distribution Values",
        plot_bgcolor: "black",
        paper_bgcolor: "black",
        font: { color: "white" },
      }}
    />
  );
}
