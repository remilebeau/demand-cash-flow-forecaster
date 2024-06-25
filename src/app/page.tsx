"use client";
import { ModeToggle as ThemeSwitch } from "@/components/ThemeSwitch";
import dynamic from "next/dynamic";

export default function HomePage() {
  const DataForm = dynamic(() => import("@/components/DataForm"), {
    ssr: false,
  });

  return (
    <>
      <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
        <DataForm />
        <ThemeSwitch />
      </main>
    </>
  );
}
