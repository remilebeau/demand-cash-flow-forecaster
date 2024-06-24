export async function getDistValues(
  distMin: string,
  distMode: string,
  distMax: string,
) {
  const DATA_URL =
    process.env.NODE_ENV === "production"
      ? "https://simulation-api-e49j.onrender.com/api/distributions/"
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
