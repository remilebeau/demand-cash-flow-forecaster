type DistResponse = {
  distValues: number[];
};
export const getDistValues = async (
  min: number,
  mode: number,
  max: number
): Promise<number[]> => {
  const DATA_URL = `https://simulation-api-e49j.onrender.com/api/distributions/?distMin=${min}&distMode=${mode}&distMax=${max}`;
  const res = await fetch(DATA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { distValues }: DistResponse = await res.json();
  return distValues;
};

export default getDistValues;
