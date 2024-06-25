"use client";
import getDistValues from "@/lib/getDistValues";
import getSimValues from "@/lib/getSimValues";
import { useSearchParams } from "next/navigation";
import DistPlot from "@/components/DistPlot";
import SimPlotWithStats from "@/components/SimPlotWithStats";

export default async function ResultsPage() {
  const searchParams = useSearchParams();

  const distMin = searchParams.get("distMin");
  const distMode = searchParams.get("distMode");
  const distMax = searchParams.get("distMax");
  const simPeriodsPerYear = searchParams.get("simPeriodsPerYear");
  if (!distMin || !distMode || !distMax || !simPeriodsPerYear) {
    return (
      <h1 className="text-3xl font-bold">
        Missing distMin, distMode, distMax, or simPeriodsPerYear
      </h1>
    );
  }

  const { distValues } = await getDistValues(distMin, distMode, distMax);
  const { simValues } = await getSimValues(
    distMin,
    distMode,
    distMax,
    simPeriodsPerYear,
  );
  return (
    <>
      {distValues && simValues && (
        <>
          <DistPlot distValues={distValues} />
          <SimPlotWithStats simValues={simValues} />
        </>
      )}
    </>
  );
}
