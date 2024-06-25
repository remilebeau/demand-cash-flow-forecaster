import { Loader } from "lucide-react";

export default function LoadingResults() {
  return (
    <>
      <Loader />
      <h1 className="text-3xl font-bold">Loading...</h1>
      <h1 className="text-3xl font-bold">
        The first request may take up to 60 seconds.
      </h1>
    </>
  );
}
