import Plot from "react-plotly.js";

type Props = {
  distValues: number[];
  displayDistValues: {
    distMin: number;
    distMode: number;
    distMax: number;
  };
};

export default function DistPlot({ distValues, displayDistValues }: Props) {
  return (
    <Plot
      className="bg-black w-full"
      data={[
        {
          x: distValues,
          type: "histogram",
        },
      ]}
      layout={{
        autosize: true,
        title: `Daily Cash Flow<br>Min: $${displayDistValues.distMin}, Mode: $${displayDistValues.distMode}<br>Max: $${displayDistValues.distMax}`,
        plot_bgcolor: "black",
        paper_bgcolor: "black",
        font: { color: "white" },
      }}
    />
  );
}
