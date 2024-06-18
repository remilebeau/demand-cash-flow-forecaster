const DATA_URL =
  process.env.NODE_ENV === "production"
    ? "https://simulation-api-e49j.onrender.com/api/simulations/"
    : "http://localhost:8000/api/simulations/";

type SimResponse = {
  simValues: number[];
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
  const { simValues }: SimResponse = await res.json();
  return {
    simValues,
  };
};

export default getSimValues;
