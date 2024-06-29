import Plot from "react-plotly.js";
type Props = {
  distValues: number[];
};

export default async function DistPlot({ distValues }: Props) {
  return (
    <Plot
      data={[
        {
          x: distValues,
          type: "histogram",
        },
      ]}
      layout={{
        autosize: true,
        plot_bgcolor: "white",
        paper_bgcolor: "white",
        font: {
          color: "black",
        },
      }}
    />
  );
}
