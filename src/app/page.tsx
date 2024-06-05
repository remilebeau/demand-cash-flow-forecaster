"use client";
import DataForm from "./components/DataForm";
import DistPlot from "./components/DistPlot";
import SimPlot from "./components/SimPlot";
import SimStats from "./components/SimStats";
export default function HomePage() {
  return (
    <main>
      <DataForm />
      <DistPlot />
      <SimPlot />
      <SimStats />
    </main>
  );
}
