import Plot from "react-plotly.js";

type Props = {
  simValues: number[];
};

export default function SimPlot({ simValues }: Props) {
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
