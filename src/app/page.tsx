import dynamic from "next/dynamic";
import DataForm from "@/components/DataForm";
import { ModeToggle as ThemeSwitch } from "@/components/ThemeSwitch";

export default function HomePage() {
  const DistPlot = dynamic(() => import("@/components/DistPlot"), {
    ssr: false,
  });
  const SimPlot = dynamic(() => import("@/components/SimPlot"), {
    ssr: false,
  });
  const SimStats = dynamic(() => import("@/components/SimStats"), {
    ssr: false,
  });
  return (
    <>
      <main className="flex flex-col max-w-md mx-auto justify-center items-center gap-2">
        <DataForm />
        <DistPlot />
        <SimPlot />
        <SimStats />
      </main>
      <footer>
        <ThemeSwitch />
      </footer>
    </>
  );
}
