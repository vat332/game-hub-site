import { useEffect, useState } from "react";
import fetchFromIGDB from "../services/api-client";
import { CanceledError } from "axios";

export interface Screenshot {
  id: number;
  url: string;
}

export interface Game {
  id: number;
  name: string;
  screenshots: Screenshot[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController(); // ✅ Tworzymy AbortController

    setLoading(true);
    fetchFromIGDB("fields name, screenshots.*; limit 10;", controller.signal)
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // ✅ Obsługa anulowania zapytania
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort(); // ✅ Anulujemy zapytanie przy odmontowaniu komponentu
  }, []);

  return { games, error, loading };
};

export default useGames;
