import { ModeToggle as ThemeSwitch } from "@/components/ThemeSwitch";
import DataForm from "@/components/DataForm";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
      <h1 className="text-3xl font-bold">Cash Flow Simulator</h1>
      <p>
        Select a distribution and input the parameters. Using Monte Carlo
        simulation, these values will be used to forecast annual cash flow.
        These models can also be used to forecast demand.
      </p>
      <DataForm />
      <ThemeSwitch />
    </main>
  );
}
