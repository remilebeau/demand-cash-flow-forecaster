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
      className="bg-black w-full"
      data={[
        {
          x: simValues,
          type: "histogram",
        },
      ]}
      layout={{
        autosize: true,
        title: `Simulated Annual Cash Flow<br>dailyMin: $${displayDistValues.distMin}, dailyMode: $${displayDistValues.distMode},<br>dailyMax: $${displayDistValues.distMax}`,
        xaxis: { title: "Annual Cash Flow" },
        yaxis: { title: "Frequency" },
        plot_bgcolor: "black",
        paper_bgcolor: "black",
        font: { color: "white" },
      }}
    />
  );
}
