import Plot from "react-plotly.js";

type Props = {
  distValues: number[];
};

export default function DistPlot({ distValues }: Props) {
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
