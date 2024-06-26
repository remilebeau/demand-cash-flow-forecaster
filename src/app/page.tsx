import { ModeToggle as ThemeSwitch } from "@/components/ThemeSwitch";
import DataForm from "@/components/DataForm";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
      <h1 className="text-3xl font-bold">Demand / Cash Flow Simulator</h1>
      <p>
        Per period (e.g. daily, weekly, monthly, quarterly), enter a minimum,
        expected, and maximum demand / cash flow. Using a Monte Carlo simulation
        of a triangular distribution, these values will be used to forecast an
        annual demand / cash flow.
      </p>
      <DataForm />
      <ThemeSwitch />
    </main>
  );
}
