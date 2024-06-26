export async function getDistValues(
  distMin: number,
  distMode: number,
  distMax: number,
) {
  const DATA_URL =
    process.env.NODE_ENV === "production"
      ? `https://simulation-api-e49j.onrender.com/api/distributions/?distMin=${distMin}&distMode=${distMode}&distMax=${distMax}`
      : `http://localhost:8000/api/distributions/?distMin=${distMin}&distMode=${distMode}&distMax=${distMax}`;
  const res = await fetch(DATA_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default getDistValues;
