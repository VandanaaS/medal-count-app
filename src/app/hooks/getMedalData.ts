import { useState, useEffect } from "react";
import { CountryMedals } from "../types/medals";

export function medalsData() {
  const [data, setData] = useState<CountryMedals[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/medals.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch medals.");
        }
        return res.json();
      })
      .then((result) => {
        console.log('data retrieved from Json:', result);
        setData(result)
    })
      .catch((err) => setError(err.message));
  }, []);

  return { data, error };
}
