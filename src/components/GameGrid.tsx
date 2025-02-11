import { useEffect, useState } from "react";
import fetchFromIGDB from "../services/api-client";
import { Text, Spinner, Box, Image } from "@chakra-ui/react";
interface Screenshot {
  id: number;
  url: string;
}
interface Game {
  id: number;
  name: string;
  screenshots: Screenshot[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  console.log(games);
  useEffect(() => {
    setLoading(true);
    fetchFromIGDB("fields name, screenshots.*; limit 1;")
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      {loading && <Spinner />}
      {error && <Text color="red.500">{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.name}
            {game.screenshots &&
              game.screenshots.map((screenshot) => (
                <Box key={screenshot.id}>
                  <Image
                    src={`https:${screenshot.url.replace(
                      "t_thumb",
                      "t_screenshot_med_2x"
                    )}`} // Wysoka jakość obrazu
                    alt={`Screenshot of ${game.name}`}
                    width="40%"
                  />
                </Box>
              ))}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default GameGrid;
