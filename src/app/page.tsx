import { ModeToggle as ThemeSwitch } from "@/components/ThemeSwitch";
import DataForm from "@/components/DataForm";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
      <h1 className="text-3xl font-bold">Demand / Cash Flow Simulator</h1>
      <p>
        Select a distribution and input the parameters. These values will be
        used to forecast annual demand / cash flow.
      </p>
      <DataForm />
      <ThemeSwitch />
    </main>
  );
}
