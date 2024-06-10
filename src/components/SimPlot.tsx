import Plot from "react-plotly.js";

type Props = {
  simValues: number[];
  displayDistValues: {
    distMin: number;
    distMode: number;
    distMax: number;
  };
};

export default function SimPlot({ simValues, displayDistValues }: Props) {
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
        title: `Simulated Annual Cash Flow<br>dailyMin: $${displayDistValues.distMin}, dailyMode: $${displayDistValues.distMode}, dailyMax: $${displayDistValues.distMax}`,
        xaxis: { title: "Annual Cash Flow" },
        yaxis: { title: "Frequency" },
        plot_bgcolor: "black",
        paper_bgcolor: "black",
        font: { color: "white" },
      }}
    />
  );
}
