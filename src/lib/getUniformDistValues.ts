export async function getUniformDistValues(distMin: number, distMax: number) {
  const DATA_URL =
    process.env.NODE_ENV === "production"
      ? `https://simulation-api-t28w.onrender.com/api/distributions/uniform?distMin=${distMin}&distMax=${distMax}`
      : `http://localhost:8000/api/distributions/uniform?distMin=${distMin}&distMax=${distMax}`;
  const res = await fetch(DATA_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default getUniformDistValues;
