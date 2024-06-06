const DATA_URL = "https://simulation-api-e49j.onrender.com/api/simulations/";
type SimResponse = {
  simValues: number[];
  simMean: number;
  simStd: number;
  simLowerCI: number;
  simUpperCI: number;
};
export const getSimValues = async (
  min: number,
  mode: number,
  max: number,
  daysPerMonth: number
) => {
  const res = await fetch(DATA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      distMin: min,
      distMode: mode,
      distMax: max,
      simDaysPerMonth: daysPerMonth,
    }),
  });
  const { simValues, simMean, simStd, simLowerCI, simUpperCI }: SimResponse =
    await res.json();
  return {
    simValues,
    simMean,
    simStd,
    simLowerCI,
    simUpperCI,
  };
};

export default getSimValues;
