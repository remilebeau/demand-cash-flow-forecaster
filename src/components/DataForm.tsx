import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DataForm() {
  const router = useRouter();

  const [distMin, setDistMin] = useState<number>();
  const [distMode, setDistMode] = useState<number>();
  const [distMax, setDistMax] = useState<number>();
  const [simDaysPerYear, setSimDaysPerYear] = useState<number>();
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrMsg("");
    // check for undefined
    if (
      distMin === undefined ||
      distMode === undefined ||
      distMax === undefined ||
      simDaysPerYear === undefined
    ) {
      setErrMsg("All fields are required");
      setIsLoading(false);
      return;
    }
    // check for min <= mode <= max
    if (distMode < distMin || distMode > distMax) {
      setErrMsg("Expected value must be between minimum and maximum");
      setIsLoading(false);
      return;
    }
    // check for min < max
    if (distMin >= distMax) {
      setErrMsg("Minimum must be less than maximum");
      setIsLoading(false);
      return;
    }

    router.push(
      `/results?distMin=${distMin}&distMode=${distMode}&distMax=${distMax}&simDaysPerYear=${simDaysPerYear}`,
    );
    setIsLoading(false);
  };

  return (
    <article className="flex flex-col gap-4 rounded-md border border-border p-4">
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
        <Label htmlFor="simDaysPerYear" className="text-xl">
          Days Per Month:
        </Label>
        <Input
          className="text-xl"
          required
          type="number"
          value={simDaysPerYear}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSimDaysPerYear(parseInt(e.target.value))
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
    </article>
  );
}
