"use client";
import dynamic from "next/dynamic";
import { ModeToggle as ThemeSwitch } from "@/components/ThemeSwitch";
import { useDataContext } from "@/context/DataContext";

export default function HomePage() {
  const DataForm = dynamic(() => import("@/components/DataForm"), {
    ssr: false,
  });
  const DistPlot = dynamic(() => import("@/components/DistPlot"), {
    ssr: false,
  });
  const SimPlot = dynamic(() => import("@/components/SimPlot"), {
    ssr: false,
  });
  const SimStats = dynamic(() => import("@/components/SimStats"), {
    ssr: false,
  });
  const { simValues, isLoading, errMsg } = useDataContext();

  return (
    <>
      <main className="flex flex-col max-w-md mx-auto justify-center items-center gap-2">
        <DataForm />
        {errMsg && <p className="text-red-500 font-bold">{errMsg}</p>}
        {isLoading && (
          <>
            <p>Loading...</p>
            <p>The first request may take up to 60 seconds.</p>
          </>
        )}
        {simValues && simValues.length > 0 && (
          <>
            <DistPlot />
            <SimPlot />
            <SimStats />
          </>
        )}
      </main>
      <footer>
        <ThemeSwitch />
      </footer>
    </>
  );
}
