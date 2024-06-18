const DATA_URL =
  process.env.NODE_ENV === "production"
    ? "https://simulation-api-e49j.onrender.com/api/simulations/stats/"
    : "http://localhost:8000/api/simulations/stats/";

type StatsResponse = {
  simMin: number;
  simMax: number;
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
    simMin,
    simMax,
    simMean,
    simStd,
    simQ1,
    simQ2,
    simQ3,
    lowerCI,
    upperCI,
  }: StatsResponse = await res.json();
  return {
    simMin,
    simMax,
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
