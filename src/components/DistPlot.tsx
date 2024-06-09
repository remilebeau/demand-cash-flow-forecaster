import Plot from "react-plotly.js";

type Props = {
  distMin: number;
  distMode: number;
  distMax: number;
  distValues: number[];
};
export default function DistPlot({
  distMin,
  distMode,
  distMax,
  distValues,
}: Props) {
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
