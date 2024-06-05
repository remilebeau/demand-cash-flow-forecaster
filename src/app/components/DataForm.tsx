import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDataContext } from "../context/DataContext";

export default function DataForm() {
  const {
    distMin,
    distMode,
    distMax,
    simDaysPerMonth,
    setSimDaysPerMonth,
    setDistMin,
    setDistMode,
    setDistMax,
    handleSubmit,
  } = useDataContext();
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 m-8">
      <Label htmlFor="distMin" className="text-xl">
        Minimum Value:
      </Label>
      <Input
        className="text-xl"
        required
        type="number"
        value={distMin}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDistMin(parseInt(e.target.value) || 0)
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
          setDistMode(parseInt(e.target.value) || 0)
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
          setDistMax(parseInt(e.target.value) || 0)
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
          setSimDaysPerMonth(parseInt(e.target.value) || 0)
        }
      />
      <Button type="submit" className="text-xl">
        Submit
      </Button>
    </form>
  );
}
