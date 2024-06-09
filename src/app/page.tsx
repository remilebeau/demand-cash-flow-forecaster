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

  const { distValues, simValues } = useDataContext();
  return (
    <>
      <main className="flex flex-col max-w-md mx-auto justify-center items-center gap-2">
        <DataForm />
        {distValues.length > 0 && simValues.length > 0 && (
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
