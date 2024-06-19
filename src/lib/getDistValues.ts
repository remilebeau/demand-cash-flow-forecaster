const DATA_URL =
  process.env.NODE_ENV === "production"
    ? "https://simulation-api-e49j.onrender.com/api/distributions/"
    : "http://localhost:8000/api/distributions/";

export const getDistValues = async (min: number, mode: number, max: number) => {
  const res = await fetch(DATA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      distMin: min,
      distMode: mode,
      distMax: max,
    }),
  });
  return res.json();
};

export default getDistValues;
