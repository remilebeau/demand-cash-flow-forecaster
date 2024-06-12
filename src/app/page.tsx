"use client";
import dynamic from "next/dynamic";
import { ModeToggle as ThemeSwitch } from "@/components/ThemeSwitch";

export default function HomePage() {
  const DataForm = dynamic(() => import("@/components/DataForm"), {
    ssr: false,
  });
  return (
    <>
      <main className="flex flex-col max-w-md mx-auto justify-center items-center gap-4 p-8">
        <DataForm />
        <ThemeSwitch />
      </main>
    </>
  );
}
