export async function getSimValues(
  distMin: string,
  distMode: string,
  distMax: string,
  simPeriodsPerYear: string,
) {
  const DATA_URL =
    process.env.NODE_ENV === "production"
      ? "https://simulation-api-e49j.onrender.com/api/simulations/"
      : `http://localhost:8000/api/simulations/?distMin=${distMin}&distMode=${distMode}&distMax=${distMax}&simPeriodsPerYear=${simPeriodsPerYear}`;
  const res = await fetch(DATA_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(
      "Failed to fetch data. Check that min <= mode <= max and min < max",
    );
  }
  return res.json();
}

export default getSimValues;
