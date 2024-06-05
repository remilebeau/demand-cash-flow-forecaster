import { useDataContext } from "../context/DataContext";
import Plot from "react-plotly.js";
export default function DistPlot() {
  const { distMin, distMode, distMax, distValues } = useDataContext();
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
        title: `Distribution Values<br>Daily Min: $${distMin}, Daily Mode: $${distMode},<br>Daily Max: $${distMax}`,
        plot_bgcolor: "black",
        paper_bgcolor: "black",
        font: { color: "white" },
      }}
    />
  );
}
