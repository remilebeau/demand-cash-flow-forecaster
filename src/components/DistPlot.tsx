import { useSearchParams } from "next/navigation";
import Plot from "react-plotly.js";
type Props = {
  distValues: number[];
};

export default async function DistPlot({ distValues }: Props) {
  const searchParams = useSearchParams();
  const distMin = searchParams.get("distMin");
  const distMode = searchParams.get("distMode");
  const distMax = searchParams.get("distMax");
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
        title: `Demand / Cash Flow per Period<br>Min: ${distMin}, Mode: ${distMode}<br>Max: ${distMax}`,
        plot_bgcolor: "black",
        paper_bgcolor: "black",
        font: { color: "white" },
      }}
    />
  );
}
