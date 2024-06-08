const DATA_URL =
  "https://simulation-api-e49j.onrender.com/api/simulations/stats/";
type StatsResponse = {
  simMean: number;
  simStd: number;
  simQ1: number;
  simQ2: number;
  simQ3: number;
  lowerCI: number;
  upperCI: number;
};
export const getSimStats = async (
  simValues: number[]
): Promise<StatsResponse> => {
  const res = await fetch(DATA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      simValues,
    }),
  });
  const {
    simMean,
    simStd,
    simQ1,
    simQ2,
    simQ3,
    lowerCI,
    upperCI,
  }: StatsResponse = await res.json();
  return {
    simMean,
    simStd,
    simQ1,
    simQ2,
    simQ3,
    lowerCI,
    upperCI,
  };
};

export default getSimStats;
