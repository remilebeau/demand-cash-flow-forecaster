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
      className="bg-black"
      data={[
        {
          x: distValues,
          type: "histogram",
        },
      ]}
      layout={{
        autosize: true,
        title: `Triangular Distribution for Daily Cash Flow<br>dailyMin: $${displayDistValues.distMin}, dailyMode: $${displayDistValues.distMode}, dailyMax: $${displayDistValues.distMax}`,
        plot_bgcolor: "black",
        paper_bgcolor: "black",
        font: { color: "white" },
      }}
    />
  );
}
