"use client";
import { Button } from "@/components/ui/button";
import getTNormDistValues from "@/lib/getTNormDistValues";
import getTNormSimValues from "@/lib/getTNormSimValues";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { ModeToggle as ThemeSwitch } from "@/components/ThemeSwitch";

export default async function TruncNormResults() {
  // client component imports
  const DistPlot = dynamic(() => import("@/components/DistPlot"), {
    ssr: false,
  });
  const SimPlot = dynamic(() => import("@/components/SimPlot"), {
    ssr: false,
  });
  const SimStats = dynamic(() => import("@/components/SimStats"), {
    ssr: false,
  });
  const router = useRouter();
  const searchParams = useSearchParams();

  // get query params
  const distMin = Number(searchParams.get("distMin"));
  const distMean = Number(searchParams.get("distMean"));
  const distSD = Number(searchParams.get("distSD"));
  const distMax = Number(searchParams.get("distMax"));
  const simPeriodsPerYear = Number(searchParams.get("simPeriodsPerYear"));

  // validate query params
  if (
    !distMin ||
    !distMean ||
    !distSD ||
    distSD < 0 ||
    !distMax ||
    !simPeriodsPerYear
  ) {
    router.push("/");
  }

  const { distValues } = await getTNormDistValues(
    distMin,
    distMean,
    distSD,
    distMax,
  );
  const {
    simValues,
    simMin,
    simMax,
    simMean,
    simQ1,
    simQ2,
    simQ3,
    lowerCI,
    upperCI,
  } = await getTNormSimValues(
    distMin,
    distMean,
    distSD,
    distMax,
    simPeriodsPerYear,
  );

  return (
    <>
      {distValues && simValues && (
        <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8 font-bold">
          <Button
            className="text-3xl font-bold"
            onClick={() => router.push("/")}
          >
            Go Back
          </Button>
          <h1 className="text-center text-3xl">Results</h1>
          <section className="grid grid-cols-2 gap-4 p-4">
            <p className="text-xl">Distribution: Truncated Normal</p>
            <p className="text-xl">Min: {distMin}</p>
            <p className="text-xl">Mean: {distMean}</p>
            <p className="text-xl">Max: {distMax}</p>
            <p className="text-xl">Standard Deviation: {distSD}</p>
          </section>

          <DistPlot distValues={distValues} />
          <SimPlot simValues={simValues} />
          <SimStats
            simMin={simMin}
            simQ1={simQ1}
            simMean={simMean}
            simQ2={simQ2}
            simQ3={simQ3}
            simMax={simMax}
            lowerCI={lowerCI}
            upperCI={upperCI}
          />
          <ThemeSwitch />
        </main>
      )}
    </>
  );
}
