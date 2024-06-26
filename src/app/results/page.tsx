"use client";
import getDistValues from "@/lib/getDistValues";
import getSimValues from "@/lib/getSimValues";
import { useSearchParams, useRouter } from "next/navigation";
import DistPlot from "@/components/DistPlot";
import SimPlotWithStats from "@/components/SimPlotWithStats";

export default async function ResultsPage() {
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
