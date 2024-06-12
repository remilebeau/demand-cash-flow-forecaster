import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import getDistValues from "@/lib/getDistValues";
import getSimValues from "@/lib/getSimValues";
import dynamic from "next/dynamic";

export default function DataForm() {
  const DistPlot = dynamic(() => import("@/components/DistPlot"), {
    ssr: false,
  });
  const SimPlot = dynamic(() => import("@/components/SimPlot"), {
    ssr: false,
  });
  const SimStats = dynamic(() => import("@/components/SimStats"), {
    ssr: false,
  });

  const [distMin, setDistMin] = useState<number>();
  const [distMode, setDistMode] = useState<number>();
  const [distMax, setDistMax] = useState<number>();
  const [distValues, setDistValues] = useState<number[]>([]);
  const [simValues, setSimValues] = useState<number[]>([]);
  const [simDaysPerMonth, setSimDaysPerMonth] = useState<number>();
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [displayDistValues, setDisplayDistValues] = useState({
    distMin: 0,
    distMode: 0,
    distMax: 0,
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrMsg("");
    if (!distMin || !distMode || !distMax || !simDaysPerMonth) {
      setErrMsg("All fields are required");
      setIsLoading(false);
      return;
    }
    if (distMode < distMin || distMode > distMax) {
      setErrMsg("Expected value must be between minimum and maximum");
      setIsLoading(false);
      return;
    }
    const distResponse = await getDistValues(distMin, distMode, distMax);
    setDistValues(distResponse);
    const simResponse = await getSimValues(
      distMin,
      distMode,
      distMax,
      simDaysPerMonth
    );
    setSimValues(simResponse.simValues);
    setIsLoading(false);
    setDisplayDistValues({
      distMin: distMin,
      distMode: distMode,
      distMax: distMax,
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Cash Flow Simulator</h1>
      <h2 className="text-2xl">
        Enter a daily minimum, mode, maximum, and days per month. These values
        will be used to create a triangular distribution. And from that
        distribution, 1000 simulations of yearly cash flow.
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Label htmlFor="distMin" className="text-xl">
          Minimum Value:
        </Label>
        <Input
          className="text-xl"
          required
          type="number"
          value={distMin}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDistMin(parseInt(e.target.value))
          }
        />
        <Label htmlFor="distMode" className="text-xl">
          Expected Value:
        </Label>
        <Input
          className="text-xl"
          required
          type="number"
          value={distMode}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDistMode(parseInt(e.target.value))
          }
        />
        <Label htmlFor="distMax" className="text-xl">
          Maximum Value:
        </Label>
        <Input
          className="text-xl"
          required
          type="number"
          value={distMax}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDistMax(parseInt(e.target.value))
          }
        />
        <Label htmlFor="simDaysPerMonth" className="text-xl">
          Days Per Month:
        </Label>
        <Input
          className="text-xl"
          required
          type="number"
          value={simDaysPerMonth}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSimDaysPerMonth(parseInt(e.target.value))
          }
        />
        <Button type="submit" className="text-xl">
          Submit
        </Button>
      </form>

      {errMsg && <p className="text-red-500">{errMsg}</p>}
      {isLoading && (
        <>
          <p>Loading...</p>
          <p>The first request may take up to 60 seconds.</p>
        </>
      )}
      {distValues.length > 0 && simValues.length > 0 && (
        <>
          <DistPlot
            distValues={distValues}
            displayDistValues={displayDistValues}
          />
          <SimPlot
            simValues={simValues}
            displayDistValues={displayDistValues}
          />
          <SimStats simValues={simValues} />
        </>
      )}
    </>
  );
}
