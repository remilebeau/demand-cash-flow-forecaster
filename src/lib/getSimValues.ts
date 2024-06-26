export async function getSimValues(
  distMin: number,
  distMode: number,
  distMax: number,
  simPeriodsPerYear: number,
) {
  const DATA_URL =
    process.env.NODE_ENV === "production"
      ? `https://simulation-api-e49j.onrender.com/api/simulations/?distMin=${distMin}&distMode=${distMode}&distMax=${distMax}&simPeriodsPerYear=${simPeriodsPerYear}`
      : `http://localhost:8000/api/simulations/?distMin=${distMin}&distMode=${distMode}&distMax=${distMax}&simPeriodsPerYear=${simPeriodsPerYear}`;
  const res = await fetch(DATA_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default getSimValues;
