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
  const DATA_URL = `https://simulation-api-e49j.onrender.com/api/simulations/?distMin=${min}&distMode=${mode}&distMax=${max}&simDaysPerMonth=${daysPerMonth}`;
  const res = await fetch(DATA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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
