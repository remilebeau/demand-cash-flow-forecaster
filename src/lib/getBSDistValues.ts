export async function getBSDistValues(values: number[]) {
  const DATA_URL =
    process.env.NODE_ENV === "production"
      ? "https://simulation-api-t28w.onrender.com/api/distributions/bootstrap"
      : "http://localhost:8000/api/distributions/bootstrap";
  const res = await fetch(DATA_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  return res.json();
}

export default getBSDistValues;
