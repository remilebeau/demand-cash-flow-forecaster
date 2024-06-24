"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import getDistValues from "@/lib/getDistValues";
import getSimValues from "@/lib/getSimValues";

const DistPlot = dynamic(() => import("@/components/DistPlot"), {
  ssr: false,
});
const SimPlotWithStats = dynamic(
  () => import("@/components/SimPlotWithStats"),
  {
    ssr: false,
  },
);

export default async function ResultsPage() {
  const searchParams = useSearchParams();

  const distMin = searchParams.get("distMin");
  const distMode = searchParams.get("distMode");
  const distMax = searchParams.get("distMax");
  const simDaysPerYear = searchParams.get("simDaysPerYear");
  if (!distMin || !distMode || !distMax || !simDaysPerYear) {
    return <div>error</div>;
  }
  console.log({ distMin, distMode, distMax, simDaysPerYear });

  const { distValues } = await getDistValues(distMin, distMode, distMax);
  const { simValues } = await getSimValues(
    distMin,
    distMode,
    distMax,
    simDaysPerYear,
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
