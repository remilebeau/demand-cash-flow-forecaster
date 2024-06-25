"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
      <h2 className="text-3xl font-bold">Something went wrong!</h2>
      <Link href="/">Go Back</Link>
    </main>
  );
}
