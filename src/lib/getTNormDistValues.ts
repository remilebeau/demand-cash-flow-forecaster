export async function getTNormDistValues(
  distMin: number,
  distMean: number,
  distSD: number,
  distMax: number,
) {
  const DATA_URL =
    process.env.NODE_ENV === "production"
      ? `https://simulation-api-t28w.onrender.com/api/distributions/truncated_normal?distMin=${distMin}&distMean=${distMean}&distSD=${distSD}&distMax=${distMax}`
      : `http://localhost:8000/api/distributions/truncated_normal?distMin=${distMin}&distMean=${distMean}&distSD=${distSD}&distMax=${distMax}`;
  const res = await fetch(DATA_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default getTNormDistValues;
