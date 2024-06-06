"use client";
import DataForm from "@/components/DataForm";
import DistPlot from "@/components/DistPlot";
import { ModeToggle as ThemeSwitch } from "@/components/ThemeSwitch";
import SimPlot from "@/components/SimPlot";
import SimStats from "@/components/SimStats";
export default function HomePage() {
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
