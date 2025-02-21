import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";

const apiClient = new APIclient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
