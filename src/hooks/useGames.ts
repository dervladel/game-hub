import { GameQuery } from "../App";
import useData from "./useData";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface ParentPlatform {
  platform: Platform;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: ParentPlatform[];
  metacritic: number;
  rating_top : number;
}

const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useData<Game>("/games", {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    },
  }, [gameQuery]);

  return { data, error, isLoading };
};

export default useGames;
