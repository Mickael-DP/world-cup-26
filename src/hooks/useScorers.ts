import { useEffect, useState } from "react";
import type { ScorersResponse } from "../types/scorers";

export const useScorers = () => {
  const [scorers, setScorers] = useState<ScorersResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const urlAPI= "/api/scorers"

  useEffect(() => {
    const fetchScorers = async () => {
      setLoading(true);
      try {
        const responses = await fetch(urlAPI, {
          headers: {
            "X-Auth-Token": import.meta.env.VITE_API_KEY,
          },
        });

        const data: ScorersResponse = await responses.json();
        setScorers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '"Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchScorers();
  }, []);

  return { scorers, loading, error };
};
