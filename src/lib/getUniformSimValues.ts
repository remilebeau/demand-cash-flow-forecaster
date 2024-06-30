export async function getUniformSimValues(
  distMin: number,
  distMax: number,
  simPeriodsPerYear: number,
) {
  const DATA_URL =
    process.env.NODE_ENV === "production"
      ? `https://simulation-api-t28w.onrender.com/api/simulations/uniform?distMin=${distMin}&distMax=${distMax}&simPeriodsPerYear=${simPeriodsPerYear}`
      : `http://localhost:8000/api/simulations/uniform?distMin=${distMin}&distMax=${distMax}&simPeriodsPerYear=${simPeriodsPerYear}`;
  const res = await fetch(DATA_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default getUniformSimValues;
