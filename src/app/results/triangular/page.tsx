"use client";
import { Button } from "@/components/ui/button";
import getDistValues from "@/lib/getDistValues";
import getSimValues from "@/lib/getSimValues";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { ModeToggle as ThemeSwitch } from "@/components/ThemeSwitch";

export default async function TriangularResults() {
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
  const distMode = Number(searchParams.get("distMode"));
  const distMax = Number(searchParams.get("distMax"));
  const simPeriodsPerYear = Number(searchParams.get("simPeriodsPerYear"));

  // validate query params
  if (!distMin || !distMode || !distMax || !simPeriodsPerYear) {
    router.push("/");
  }

  const { distValues } = await getDistValues(
    "triangular",
    distMin,
    distMode,
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
  } = await getSimValues(
    "triangular",
    distMin,
    distMode,
    distMax,
    simPeriodsPerYear,
  );

  return (
    <>
      {distValues && simValues && (
        <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
          <Button onClick={() => router.push("/")}>Go Back</Button>
          <h1 className="text-center text-3xl font-bold">Results</h1>
          <h2 className="text-center text-2xl font-bold">
            Selected Distribution: Triangular
          </h2>
          <section className="flex flex-row justify-between gap-8 p-8">
            <p>Min: {distMin}</p>
            <p>Mode: {distMode}</p>
            <p>Max: {distMax}</p>
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
