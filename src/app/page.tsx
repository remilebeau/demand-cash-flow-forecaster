import { ModeToggle as ThemeSwitch } from "@/components/ThemeSwitch";
import DataForm from "@/components/DataForm";

export default function HomePage() {
  return (
    <>
      <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
        <DataForm />
        <ThemeSwitch />
      </main>
    </>
  );
}
