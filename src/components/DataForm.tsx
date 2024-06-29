"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DataForm() {
  // client component imports
  const BootstrapForm = dynamic(() => import("./BootstrapForm"), {
    ssr: false,
  });
  const TriangularForm = dynamic(() => import("./TriangularForm"), {
    ssr: false,
  });
  const TruncNormForm = dynamic(() => import("./TruncNormForm"), {
    ssr: false,
  });
  const UniformForm = dynamic(() => import("./UniformForm"), {
    ssr: false,
  });

  const [distribution, setDistribution] = useState("");

  return (
    <>
      <label htmlFor="distribution">Select Distribution</label>
      <Select
        onValueChange={(value) => setDistribution(value)}
        value={distribution}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a distribution" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bootstrap">Bootstrap</SelectItem>
          <SelectItem value="triangular">Triangular</SelectItem>
          <SelectItem value="truncnorm">Truncated Normal</SelectItem>
          <SelectItem value="uniform">Uniform</SelectItem>
        </SelectContent>
      </Select>

      {distribution === "bootstrap" && <BootstrapForm />}
      {distribution === "triangular" && <TriangularForm />}
      {distribution === "truncnorm" && <TruncNormForm />}
      {distribution === "uniform" && <UniformForm />}
    </>
  );
}
