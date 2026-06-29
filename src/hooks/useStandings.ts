import { useEffect, useState } from "react";
import type { StandingsResponse } from "../types/standings";



export const useStandings = () => {
    const [standings, setStandings] = useState<StandingsResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const urlAPI = "/api/standings";
    
    useEffect(() => {
        const fetchStandings = async () => {
        setLoading(true);
        try {
            const response = await fetch(urlAPI , {
                headers: {
                    "X-Auth-Token": import.meta.env.VITE_API_KEY
                },
            });

            if (!response.ok) {
                throw new Error(`Error fetching standings: ${response.statusText}`);
            }

            const data: StandingsResponse = await response.json();
            setStandings(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error");
        } finally {
            setLoading(false);
        }
    };

    fetchStandings();
    }, []);
    
    return { standings, loading, error };
};