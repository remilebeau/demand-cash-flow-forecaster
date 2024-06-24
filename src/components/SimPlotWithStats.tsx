import Plot from "react-plotly.js";
import getSimValues from "@/lib/getSimValues";
import { useSearchParams } from "next/navigation";

type Props = {
  simValues: number[];
};

export default async function SimPlot({ simValues }: Props) {
  const searchParams = useSearchParams();
  const distMin = searchParams.get("distMin");
  const distMode = searchParams.get("distMode");
  const distMax = searchParams.get("distMax");
  const simDaysPerYear = searchParams.get("simDaysPerYear");
  if (!simDaysPerYear || !distMin || !distMode || !distMax) {
    return <div>error</div>;
  }
  const { simMin, simMax, simMean, simQ1, simQ2, simQ3, lowerCI, upperCI } =
    await getSimValues(distMin, distMode, distMax, simDaysPerYear);

  return (
    <>
      <Plot
        className="w-full bg-black"
        data={[
          {
            x: simValues,
            type: "histogram",
          },
        ]}
        layout={{
          autosize: true,
          title: `Simulated Annual Cash Flow<br>dailyMin: $${distMin}, dailyMode: $${distMode},<br>dailyMax: $${distMax}`,
          xaxis: { title: "Annual Cash Flow" },
          yaxis: { title: "Frequency" },
          plot_bgcolor: "black",
          paper_bgcolor: "black",
          font: { color: "white" },
        }}
      />
      <article className="flex w-full flex-col rounded-md border p-2">
        <h2 className="text-center">Simulation Statistics</h2>
        <section id="mean" className="flex flex-row justify-between">
          <p>Mean:</p>
          <p>{simMean}</p>
        </section>
        <section id="ci" className="flex flex-row justify-between text-right">
          <p className="text-left">95% Confidence Interval for Mean:</p>
          <p>
            [{lowerCI}, {upperCI}]
          </p>
        </section>
        <section id="min" className="flex flex-row justify-between">
          <p>Minimum:</p>
          <p>{simMin}</p>
        </section>
        <section id="25p" className="flex flex-row justify-between">
          <p>25th Percentile:</p>
          <p>{simQ1}</p>
        </section>
        <section id="50p" className="flex flex-row justify-between">
          <p>50th Percentile:</p>
          <p>{simQ2}</p>
        </section>
        <section id="75p" className="flex flex-row justify-between">
          <p>75th Percentile:</p>
          <p>{simQ3}</p>
        </section>
        <section id="max" className="flex flex-row justify-between">
          <p>Maximum:</p>
          <p>{simMax}</p>
        </section>
      </article>
    </>
  );
}
