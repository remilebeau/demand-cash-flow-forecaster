export async function getSimValues(
  distMin: string,
  distMode: string,
  distMax: string,
  simDaysPerYear: string,
) {
  const DATA_URL =
    process.env.NODE_ENV === "production"
      ? "https://simulation-api-e49j.onrender.com/api/simulations/"
      : `http://localhost:8000/api/simulations/?distMin=${distMin}&distMode=${distMode}&distMax=${distMax}&simDaysPerYear=${simDaysPerYear}`;
  const res = await fetch(DATA_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default getSimValues;
