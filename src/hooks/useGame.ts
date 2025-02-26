import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIclient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
