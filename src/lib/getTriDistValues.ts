export async function getTriDistValues(
  distMin: number,
  distMode: number,
  distMax: number,
) {
  const DATA_URL =
    process.env.NODE_ENV === "production"
      ? `https://simulation-api-t28w.onrender.com/api/distributions/triangular?distMin=${distMin}&distMode=${distMode}&distMax=${distMax}`
      : `http://localhost:8000/api/distributions/triangular?distMin=${distMin}&distMode=${distMode}&distMax=${distMax}`;
  const res = await fetch(DATA_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default getTriDistValues;
