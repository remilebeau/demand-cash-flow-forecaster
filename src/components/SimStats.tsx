type Props = {
  simMin: number;
  simQ1: number;
  simMean: number;
  simQ2: number;
  simQ3: number;
  simMax: number;
  lowerCI: number;
  upperCI: number;
};

export default function SimStats({
  simMin,
  simQ1,
  simMean,
  simQ2,
  simQ3,
  simMax,
  lowerCI,
  upperCI,
}: Props) {
  return (
    <article className="flex w-full flex-col rounded-md border p-2 font-bold">
      <h2 className="text-center">Simulation Statistics</h2>
      <section id="min" className="flex flex-row justify-between">
        <p>Minimum:</p>
        <p>{simMin.toLocaleString("en-US")}</p>
      </section>
      <section id="25p" className="flex flex-row justify-between">
        <p>25th Percentile:</p>
        <p>{simQ1.toLocaleString("en-US")}</p>
      </section>
      <section id="mean" className="flex flex-row justify-between">
        <p>Mean:</p>
        <p>{simMean.toLocaleString("en-US")}</p>
      </section>
      <section id="ci" className="flex flex-row justify-between text-right">
        <p className="text-left">95% Confidence Interval for Mean:</p>
        <p>
          [{lowerCI.toLocaleString("en-US")} to{" "}
          {upperCI.toLocaleString("en-US")}]
        </p>
      </section>
      <section id="50p" className="flex flex-row justify-between">
        <p>Median:</p>
        <p>{simQ2.toLocaleString("en-US")}</p>
      </section>
      <section id="75p" className="flex flex-row justify-between">
        <p>75th Percentile:</p>
        <p>{simQ3.toLocaleString("en-US")}</p>
      </section>
      <section id="max" className="flex flex-row justify-between">
        <p>Maximum:</p>
        <p>{simMax.toLocaleString("en-US")}</p>
      </section>
    </article>
  );
}
