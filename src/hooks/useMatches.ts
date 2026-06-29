import { useEffect, useState } from "react";
import type { MatchesResponse } from "../types/matchs";

export const useMatches = () => {
  const [matches, setMatches] = useState<MatchesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const urlAPI = "/api/matches";

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      try {
        const response = await fetch(urlAPI, {
          headers: {
            "X-Auth-Token": import.meta.env.VITE_API_KEY,
          },
        });

        const data: MatchesResponse = await response.json();
        setMatches(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return { matches, loading, error };
};
