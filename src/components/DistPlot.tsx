import Plot from "react-plotly.js";
import { useSearchParams } from "next/navigation";
type Props = {
  distValues: number[];
};

export default async function DistPlot({ distValues }: Props) {
  const searchParams = useSearchParams();
  const distMin = searchParams.get("distMin");
  const distMode = searchParams.get("distMode");
  const distMax = searchParams.get("distMax");
  if (!distMin || !distMode || !distMax) {
    return (
      <h1 className="text-3xl font-bold">
        Error: missing distMin, distMode, or distMax
      </h1>
    );
  }
  return (
    <Plot
      className="w-full bg-black"
      data={[
        {
          x: distValues,
          type: "histogram",
        },
      ]}
      layout={{
        autosize: true,
        title: `Daily Cash Flow<br>Min: $${distMin}, Mode: $${distMode}<br>Max: $${distMax}`,
        plot_bgcolor: "black",
        paper_bgcolor: "black",
        font: { color: "white" },
      }}
    />
  );
}
