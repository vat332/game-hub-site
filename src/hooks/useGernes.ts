import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import genres from "../data/genres";

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
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: { count: genres.length, results: genres, next: null },
  });

export default useGenres;
