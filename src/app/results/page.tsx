"use client";
import { Button } from "@/components/ui/button";
import getDistValues from "@/lib/getDistValues";
import getSimValues from "@/lib/getSimValues";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { ModeToggle as ThemeSwitch } from "@/components/ThemeSwitch";

export default async function ResultsPage() {
  // client component imports
  const DistPlot = dynamic(() => import("@/components/DistPlot"), {
    ssr: false,
  });
  const SimPlotWithStats = dynamic(
    () => import("@/components/SimPlotWithStats"),
    {
      ssr: false,
    },
  );
  const router = useRouter();
  const searchParams = useSearchParams();

  const distMin = Number(searchParams.get("distMin"));
  const distMode = Number(searchParams.get("distMode"));
  const distMax = Number(searchParams.get("distMax"));
  const simPeriodsPerYear = Number(searchParams.get("simPeriodsPerYear"));
  if (!distMin || !distMode || !distMax || !simPeriodsPerYear) {
    router.push("/");
  }

  const { distValues } = await getDistValues(distMin, distMode, distMax);
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
  } = await getSimValues(distMin, distMode, distMax, simPeriodsPerYear);

  return (
    <>
      {distValues && simValues && (
        <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
          <Button onClick={() => router.push("/")}>Go Back</Button>
          <h1 className="text-center text-3xl font-bold">Results</h1>
          <DistPlot distValues={distValues} />
          <SimPlotWithStats
            simValues={simValues}
            simMin={simMin}
            simMax={simMax}
            simMean={simMean}
            simQ1={simQ1}
            simQ2={simQ2}
            simQ3={simQ3}
            lowerCI={lowerCI}
            upperCI={upperCI}
            distMin={distMin}
            distMode={distMode}
            distMax={distMax}
            simPeriodsPerYear={simPeriodsPerYear}
          />
          <ThemeSwitch />
        </main>
      )}
    </>
  );
}
